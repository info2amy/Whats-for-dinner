## App: What's for Dinner?

## What does this app do?

Enter a main ingrediant that you have on hand, and get meal suggestions!

## API and Data Sample

```
{
    "meals": [
        {
            "strMeal": "Brown Stew Chicken",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg",
            "idMeal": "52940"
        },
        {
            "strMeal": "Chicken & mushroom Hotpot",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg",
            "idMeal": "52846"
        },
        {
            "strMeal": "Chicken Alfredo Primavera",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
            "idMeal": "52796"
        }
    ]
}
```

## Wireframes

Wireframe for mobile device:
https://wireframe.cc/wpbqLI

#### MVP

✪ Use HTML, CSS, JavaScrip and an API that will supply data about meal possibilities
✪ Allow user to enter a search item, based on an ingredient they have on hand
✪ Display an entrée picture based upon the user input
✪ Design the app with the mobile-first approach
✪ Work with Responsive Design to use app with larger screens
✪ Use Flexbox or Grid on the elements in the app

#### PostMVP

✪ Add a button and area that will display the selected meal ingredients when clicked
✪ Add a feature where the table is empty until a meal is searched, then everything appears
✪ Add an API and a button that will connect to an instructional YouTube video for meal prep
✪ Add Placesettings, with transitional effects
✪ Refresh selection button to say 'Select a different entrée?' on subsequent searches

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day    | Deliverable                                        | Status   |
| ------ | -------------------------------------------------- | -------- |
| Nov 9  | Prompt / Wireframes / Priority Matrix / Timeframes | Complete |
| Nov 10 | Project Approval                                   | Complete |
| Nov 12 | Core Application Structure (HTML, CSS, etc.)       | Complete |
| Nov 13 | Pseudocode / actual code                           | Complete |
| Nov 16 | MVP                                                | Complete |
| Nov 17 | Presentations                                      | Complete |

## Priority Matrix

Priority Matrix:
https://docs.google.com/drawings/d/1RXUVRIs5OQI84DU-oL6Wmwcivf9MDwGjvo4ogDRu2aw/edit

## Timeframes

| Component             | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------- | :------: | :------------: | :-----------: | :---------: |
| HTML Structure        |    H     |     1 hrs      |     1 hrs     |    1 hrs    |
| Basic CSS styling     |    H     |     2 hrs      |     1 hrs     |    1 hrs    |
| Finding API           |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| JS structure API data |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| more JS input work    |    H     |     3 hrs      |     2 hrs     |    2 hrs    |
| JS button activity    |    H     |     2 hrs      |     1 hrs     |    1 hrs    |
| CSS style of JS input |    H     |     3 hrs      |     3 hrs     |    6 hrs    |
| Picture appearance    |    H     |     2 hrs      |     1 hrs     |    1 hrs    |
| Flexbox functionality |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Try Grid layout       |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
| Responsiveness work   |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| add more JS input     |    H     |     3 hrs      |     2 hrs     |    2 hrs    |
| CSS style new input   |    H     |     3 hrs      |     3 hrs     |    6 hrs    |
| rework Responsiveness |    H     |     3 hrs      |     3 hrs     |    5 hrs    |
| Refresh page work     |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Total                 |    H     |     40 hrs     |    32 hrs     |   40 hrs    |

## Code Snippet

I especially enjoyed creating a "Dining Room Table" look for my API information display area, and added the functionality of the table being "empty" until a meal is searched for. Then, the meal picture, title, and instructional YouTube video link appear, as well a placesettings.

````.picture-container {
    width: 70vw;
    border-radius: 49%;
    max-width: 800px;
    max-height: 500px;
    min-width: 600px;
  }

.unset-table h3,
.unset-table img.returned-image,
.unset-table a,
.unset-table .meal-settings-pics {
  opacity: 0;
}

.placesetting {
  display: none;
}

  const tableItems = document.querySelector('.picture-container')
  tableItems.classList.remove('unset-table')```


## Change Log

I changed some of my post-MVP features.  I abandoned the addition of displaying the meal ingredients, as the API information provided for this was not effective.  Also, I did not add any text for selecting a different meal, as the functionality was already available simply by clicking the 'search' button again.
````
