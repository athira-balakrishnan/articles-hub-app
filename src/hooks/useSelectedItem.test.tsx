import React from 'react';
import { renderHook } from '@testing-library/react';
import { useSelectedItem } from './useSelectedItem';
import {
    SelectedItemContext,
    SelectedItemContextType,
} from '@context/selectedItemContext';

describe('useSelectedItem hook', () => {
    const mockContextValue: SelectedItemContextType = {
        selectedItem: {
            "id": 100000010095752,
            "source": "New York Times",
            "published_date": "2025-04-09",
            "updated": "2025-04-09 22:37:41",
            "section": "Opinion",
            "subsection": "",
            "byline": "By Erwin Chemerinsky and Laurence H. Tribe",
            "type": "Article",
            "title": "We Should All Be Very, Very Afraid",
            "abstract": "Trump is seeking to establish a truly chilling proposition: that no one can stop his administration from imprisoning anyone it wants, anywhere in the world.",
            "media": [
                {
                    "type": "image",
                    "caption": "",
                    "copyright": "Jose Cabezas/Reuters",
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
        },
        selectItem: jest.fn(),
    };

    test('returns context value when used inside SelectedItemContext', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <SelectedItemContext.Provider value={mockContextValue}>
                {children}
            </SelectedItemContext.Provider>
        );

        const { result } = renderHook(() => useSelectedItem(), { wrapper });

        expect(result.current).toEqual(mockContextValue);
    });
});
