import { getData } from './apiWrapper';
import axiosInstance from './axiosInstance';
import axios from 'axios';
import constants from '@assets/constants.json';
import { API_KEY } from '@assets/envVariables';

jest.mock('./axiosInstance', () => ({
    __esModule: true,
    default: {
        get: jest.fn(),
    },
}));
jest.mock('axios');

const mockedAxiosInstance = axiosInstance as unknown as {
    get: jest.Mock;
};
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getData', () => {
    const mockUrl = '/some-endpoint';

    const mockResponse = {
        data: {
            results: [
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
                  },
            ],
        },
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should return data on successful request', async () => {
        mockedAxiosInstance.get.mockResolvedValueOnce(mockResponse);

        const result = await getData(mockUrl);

        expect(mockedAxiosInstance.get).toHaveBeenCalledWith(mockUrl, {
            params: { 'api-key': API_KEY },
        });

        expect(result).toEqual(mockResponse.data);
    });

      test('should throw an Axios error properly', async () => {
        const error = {
          isAxiosError: true,
          message: 'Network Error',
          response: { status: 500 },
        };

        mockedAxiosInstance.get.mockRejectedValueOnce(error);
        mockedAxios.isAxiosError.mockReturnValue(true);

        await expect(getData(mockUrl)).rejects.toEqual({
          message: 'Network Error',
          response: error.response,
        });
      });

      test('should throw unexpected error if not an Axios error', async () => {
        const error = new Error('Something went wrong');

        mockedAxiosInstance.get.mockRejectedValueOnce(error);
        mockedAxios.isAxiosError.mockReturnValue(false);

        await expect(getData(mockUrl)).rejects.toEqual({
          message: constants.unexpectedError,
        });
      });
});
