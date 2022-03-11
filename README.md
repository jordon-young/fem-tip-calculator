# Tip Calculator :money_with_wings:

[![Website Status](https://img.shields.io/website.svg?label=Live%20Demo&online_color=green&up_message=Online&offline_color=red%26label%3DLive%20Demo&down_message=Offline&style=for-the-badge&url=https%3A%2F%2Fjordon-young.github.io%2Ffem-tip-calculator%2F)](https://jordon-young.github.io/fem-tip-calculator/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SCSS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Designed in Figma](https://img.shields.io/badge/Designed%20in%20Figma-A259FF?style=for-the-badge&logo=figma&logoColor=white)

This is a solution to the [Tip Calculator Challenge](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX) by [Frontend Mentor](https://www.frontendmentor.io/).

![Desktop Design Preview](./assets/design/desktop-preview.jpg)

## :book: Table of Contents

[:clipboard: The Challenge](#📋-the-challenge)

[:mag: Design Revisions](#🔍-design-revisions)

[:white_check_mark: The Solution](#✅-the-solution)

[:link: Links](#🔗-links)

[Sass Watch Command](#sass-watch-command)

<br/>

<br/>

## :clipboard: The Challenge

[:arrow_up: Table of Contents](#📖-table-of-contents)

- [Official Brief](#official-brief)
- [Starting Resources](#starting-resources)
- [My Requirements](#my-requirements)

### Official Brief

From the [Tip Calculator Challenge](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX) page on Frontend Mentor's website:

> Your challenge is to build out this tip calculator app and get it looking as close to the design as possible.
>
> You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.
>
> Users should be able to:
>
> - View the optimal layout for the app depending on their device's screen size
> - See hover states for all interactive elements on the page
> - Calculate the correct tip and total cost of the bill per person

### Starting Resources

Frontend Mentor

- Starting File Structure
- Minimalistic [Style Guide](./assets/design/style-guide.md)
- Images Included in Design
- [Design Screenshots](./assets/design/)
  - Desktop
    - [Initial State](./assets/design/desktop-design-empty.jpg)
    - [Active States](./assets/design/active-states.jpg) (Hover, Active, Error)
    - [Completed Form](./assets/design/desktop-design-completed.jpg)
  - Mobile
    - [Completed Form](./assets/design/mobile-design.jpg)

### My Goals

- Make the Design Responsive
- Use SCSS for Styling
- Treat :hover Correctly on iOS (Chrome & Safari)

## :mag: Design Revisions

[:arrow_up: Table of Contents](#📖-table-of-contents)

### Recreating the Design in Figma

|                           |                                                                                       |
| :-----------------------: | :-----------------------------------------------------------------------------------: |
|       Input Pieces        |   ![Input Card Components](./assets/solution/screenshots/input_card_components.png)   |
|    Input Card Layouts     |             ![Input Cards](./assets/solution/screenshots/input_cards.png)             |
| Display Card & Components | ![Display Card Components](./assets/solution/screenshots/display_card_components.png) |

### Making the Design Responsive

| Min-Width |                         Min-Width / Max-Width                         |
| :-------: | :-------------------------------------------------------------------: |
|   375px   | ![Breakpoint Preview](./assets/solution/screenshots/breakpoint_0.png) |
|   576px   | ![Breakpoint Preview](./assets/solution/screenshots/breakpoint_1.png) |
|   720px   | ![Breakpoint Preview](./assets/solution/screenshots/breakpoint_2.png) |
|   875px   | ![Breakpoint Preview](./assets/solution/screenshots/breakpoint_3.png) |
|  1047px   | ![Breakpoint Preview](./assets/solution/screenshots/breakpoint_4.png) |
|  1155px   | ![Breakpoint Preview](./assets/solution/screenshots/breakpoint_5.png) |

## :white_check_mark: The Solution

[:arrow_up: Table of Contents](#📖-table-of-contents)

![Breakpoints](./assets/solution/screenshots/breakpoints.svg)

### Interactions & Functionality

| Input Card           |                                                                      |
| :------------------- | :------------------------------------------------------------------- |
| Input Focus          | ![Input Focus Gif](./assets/solution/gifs/focus_input.gif)           |
| Input Error          | ![Input Error States](./assets/solution/gifs/input_error_states.gif) |
| Tip Hover            | ![Tip Button Hover](./assets/solution/gifs/radio_hover.gif)          |
| Show/Hide Custom Tip | ![Show/Hide Custom Tip](./assets/solution/gifs/custom_tip.gif)       |

| Display Card      |                                                                         |
| :---------------- | :---------------------------------------------------------------------- |
| Live Calculations | ![Live Calculations](./assets/solution/gifs/live_updates.gif)           |
| Invalid Input     | ![Invalid Input](./assets/solution/gifs/display_error.gif)              |
| Responsive Text   | ![Responsive Output Text](./assets/solution/gifs/responsive_text.gif)   |
| Reset Button      | ![Reset Button Enable/Disable](./assets/solution/gifs/reset_button.gif) |

| Tip Calculator      |                                                                                   |
| :------------------ | :-------------------------------------------------------------------------------- |
| Responsive Layout   | ![Responsive Layout](./assets/solution/gifs/responsive.gif)                       |
| Keyboard Navigation | ![Accessible Keyboard Navigation](./assets/solution/gifs/keyboard_navigation.gif) |

### Original Design vs. Solution Screenshots

|    Desktop     |                                  Original                                  |                                    Solution                                     |
| :------------: | :------------------------------------------------------------------------: | :-----------------------------------------------------------------------------: |
| Initial State  |   ![Initial Design Screenshot](./assets/design/desktop-design-empty.jpg)   | ![Solution Screenshot](./assets/solution/screenshots/desktop-initial-state.png) |
| Active States  |      ![Initial Design Screenshot](./assets/design/active-states.jpg)       | ![Solution Screenshot](./assets/solution/screenshots/desktop-active-states.png) |
| Completed Form | ![Initial Design Screenshot](./assets/design/desktop-design-completed.jpg) |   ![Solution Screenshot](./assets/solution/screenshots/desktop-completed.png)   |

|     Mobile     |                            Original                             |                                  Solution                                  |
| :------------: | :-------------------------------------------------------------: | :------------------------------------------------------------------------: |
| Completed Form | ![Initial Design Screenshot](./assets/design/mobile-design.png) | ![Solution Screenshot](./assets/solution/screenshots/mobile-completed.png) |

## :link: Links

[:arrow_up: Table of Contents](#📖-table-of-contents)

### Author

- Github Profile - [Jordon Young](https://github.com/jordon-young/)
- Frontend Mentor - [@jordon-young](https://www.frontendmentor.io/profile/jordon-young)

### Project

- [Github Repository (Public)](https://github.com/jordon-young/fem-tip-calculator)
- [Solution Live Site](https://jordon-young.github.io/fem-tip-calculator/)

## Sass Watch Command

```bash
sass -w ./assets/stylesheets/scss:./assets/stylesheets/css
```
