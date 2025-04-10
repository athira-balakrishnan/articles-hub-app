import React from 'react';
import { render, screen, waitFor, act, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SelectedItemProvider } from '@src/context/SelectedItemProvider';
import ArticleList from './ArticleList';
import { getData } from '@apis/apiWrapper';

// const getData = jest.fn();

// Mock constants and components
jest.mock('@assets/constants.json', () => ({
  articleListHeading: 'Test Article List',
  MVdescription: 'Test Description',
  "notFound": "Oops! Resource Not Found",
  "unauthorized": "Oops! You are not authorized to view this resource",
  "unexpectedError": "An unexpected error occurred",
  "notFoundErrorCode": 404,
  "unauthorizedErrorCode": 401,
  "unexpectedErrorCode": 500,
}));

jest.mock('@apis/apiWrapper', () => ({
  getData: jest.fn(),
}));

const mockedGetData = getData as jest.Mock;

// jest.mock('@components/card/Card', () => ({ children }) => <div>{children}</div>);
// jest.mock('@components/articleCard/ArticleCard', () => ({ articleCardDetails }) => (
//   <div>{articleCardDetails.title}</div>
// ));
// jest.mock('@components/header/Header', () => ({ children }) => <header>{children}</header>);
// jest.mock('@components/sectionText/SectionText', () => ({ children }) => <section>{children}</section>);
// jest.mock('@components/loaderList/LoaderList', () => () => <div>Loading...</div>);
// jest.mock('@components/errorComponent/ErrorComponent', () => ({ error }) => (
//   <div>Error: {error.statusMessage}</div>
// ));

// Mock API response
const mockArticles = [
  {
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
        "caption": "",
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
  }
];

describe('ArticleList Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading state initially', () => {
    mockedGetData.mockResolvedValueOnce({ results: [] }); // Mock resolved value
    render(
      <Router>
        <ArticleList />
      </Router>
    );
    expect(screen.getByText('Test Article List')).toBeInTheDocument();
  });

  test('fetches and displays articles', async () => {
    mockedGetData.mockResolvedValueOnce({ results: mockArticles });

    await act(async () => {
      render(<SelectedItemProvider>
        <Router>
          <ArticleList />
        </Router>
      </SelectedItemProvider>);
    });

    await waitFor(() => expect(screen.getByText(mockArticles[0].title)).toBeInTheDocument(), { timeout: 3000 });
  });

  test('handles API errors gracefully', async () => {
    mockedGetData.mockRejectedValueOnce(new Error('API Error'));
    await act(async () => {
      render(<SelectedItemProvider>
        <Router>
          <ArticleList />
        </Router>
      </SelectedItemProvider>);
    });

    // Wait for error message to be displayed
    await waitFor(() => expect(screen.getByText('An unexpected error occurred')).toBeInTheDocument());
  });

  test('navigates to article details on card click', async () => {
    mockedGetData.mockResolvedValueOnce({ results: mockArticles });
    await act(async () => {
      render(<SelectedItemProvider>
        <Router>
          <ArticleList />
        </Router>
      </SelectedItemProvider>);
    });

    // Wait for article to be displayed
    await waitFor(() => {
      const articleCard = screen.getByText(mockArticles[0].title);
      expect(articleCard).toBeInTheDocument();

      // Simulate click event
      fireEvent.click(articleCard);

      // Add your navigation assertion here
      // For example, if you use 'useNavigate' from 'react-router-dom':
      // expect(mockNavigate).toHaveBeenCalledWith('/details');
    });
  });
});
