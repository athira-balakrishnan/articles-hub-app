import React from 'react';
import { render, screen, waitFor, act, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import ArticleDetails from './ArticleDetails';
import { useSelectedItem } from '@hooks/useSelectedItem';

// Mock necessary modules and components
jest.mock('@hooks/useSelectedItem');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const mockedUseSelectedItem = useSelectedItem as jest.Mock;
const mockedNavigate = useNavigate as jest.Mock;

describe('ArticleDetails Component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    mockedNavigate.mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockSelectedItem = {
    "uri": "nyt://article/a543f8f6-8ba7-51c1-a933-07995a295f03",
    "url": "https://www.nytimes.com/2025/04/09/opinion/trump-deportations-gulag-prison.html",
    "id": 100000010095752,
    "asset_id": 100000010095752,
    "source": "New York Times",
    "published_date": "2025-04-09",
    "updated": "2025-04-09 22:37:41",
    "section": "Opinion",
    "subsection": "",
    "nytdsection": "opinion",
    "adx_keywords": "Civil Rights and Liberties;Alien Enemies Act (1798);Presidential Power (US);Immigration and Emigration;Immigration Detention;Illegal Immigration;Deportation;Habeas Corpus;United States Politics and Government;United States International Relations;Federal Courts (US);Appeals Courts (US);Decisions and Verdicts;Prisons and Prisoners;Xinis, Paula;Trump, Donald J;Bukele, Nayib;Supreme Court (US);El Salvador",
    "column": null,
    "byline": "By Erwin Chemerinsky and Laurence H. Tribe",
    "type": "Article",
    "title": "We Should All Be Very, Very Afraid",
    "abstract": "Trump is seeking to establish a truly chilling proposition: that no one can stop his administration from imprisoning anyone it wants, anywhere in the world.",
    "des_facet": [
      "Civil Rights and Liberties",
      "Alien Enemies Act (1798)",
      "Presidential Power (US)",
      "Immigration and Emigration",
      "Immigration Detention",
      "Illegal Immigration",
      "Deportation",
      "Habeas Corpus",
      "United States Politics and Government",
      "United States International Relations",
      "Federal Courts (US)",
      "Appeals Courts (US)",
      "Decisions and Verdicts",
      "Prisons and Prisoners"
    ],
    "org_facet": [
      "Supreme Court (US)"
    ],
    "per_facet": [
      "Xinis, Paula",
      "Trump, Donald J",
      "Bukele, Nayib"
    ],
    "geo_facet": [
      "El Salvador"
    ],
    "media": [
      {
        "type": "image",
        "subtype": "photo",
        "caption": "test",
        "copyright": "Jose Cabezas/Reuters",
        "approved_for_syndication": 1,
        "media-metadata": [
          {
            "url": "https://static01.nyt.com/images/2025/04/10/multimedia/00tribe1-plbw/00tribe1-plbw-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75
          },
          {
            "url": "https://static01.nyt.com/images/2025/04/10/multimedia/00tribe1-plbw/00tribe1-plbw-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210
          },
          {
            "url": "https://static01.nyt.com/images/2025/04/10/multimedia/00tribe1-plbw/00tribe1-plbw-mediumThreeByTwo440.jpg",
            "format": "mediumThreeByTwo440",
            "height": 293,
            "width": 440
          }
        ]
      }
    ],
    "eta_id": 0
  };

  test('renders the back button', () => {
    mockedUseSelectedItem.mockReturnValue({ selectedItem: mockSelectedItem });

    render(<ArticleDetails />, { wrapper: Router });

    expect(screen.getByText('Go Back')).toBeInTheDocument();
  });

  test('navigates to /list on back button click', () => {
    mockedUseSelectedItem.mockReturnValue({ selectedItem: mockSelectedItem });

    render(<ArticleDetails />, { wrapper: Router });

    fireEvent.click(screen.getByText('Go Back'));

    expect(mockNavigate).toHaveBeenCalledWith('/list');
  });

  test('renders article details if selectedItem and image data exist', () => {
    mockedUseSelectedItem.mockReturnValue({ selectedItem: mockSelectedItem });

    render(<ArticleDetails />, { wrapper: Router });

    expect(screen.getByText(mockSelectedItem.title)).toBeInTheDocument();
    expect(screen.getByText(mockSelectedItem.abstract)).toBeInTheDocument();
    expect(screen.getByAltText(mockSelectedItem.media[0].caption)).toBeInTheDocument();
    expect(
      screen.getByText(`Updated on ${mockSelectedItem.updated} ${mockSelectedItem.byline}`)
    ).toBeInTheDocument();
  });

  test('renders NotFound component when selectedItem is undefined', () => {
    mockedUseSelectedItem.mockReturnValue({ selectedItem: undefined });

    render(<ArticleDetails />, { wrapper: Router });

    expect(screen.getByText(/Not Found/i)).toBeInTheDocument(); // Assuming NotFound shows that text
  });

  test('renders NotFound component when media is missing', () => {
    const invalidItem = { ...mockSelectedItem, media: [] };
    mockedUseSelectedItem.mockReturnValue({ selectedItem: invalidItem });

    render(<ArticleDetails />, { wrapper: Router });

    expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
  });
});
