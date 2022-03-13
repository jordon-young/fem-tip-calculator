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

[:mag: My Process](#🔍-my-process)

[:white_check_mark: The Solution](#✅-the-solution)

[:link: Links](#🔗-links)

[:computer: Sass Watch Command](#💻-sass-watch-command)

<br/>

<br/>

## :clipboard: The Challenge

[:arrow_up: Table of Contents](#📖-table-of-contents)

- [Brief](#brief)
- [FEM Provided Resources](#starting-resources)
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

### FEM Provided Resources

- Starting File Structure
- Minimalistic [Style Guide](./assets/design/style-guide.md)
- Images Included in Design
- [Design Screenshots](./assets/design/) (Desktop, Active States, Mobile)

### My Goals

- Make the Design Responsive
- Use SCSS for Styling
- Overcome iOS Specific Challenges:
  - Sticky Hover on Touch
  - Request Specific Keyboard Layout per Input

## :mag: My Process

[:arrow_up: Table of Contents](#📖-table-of-contents)

1. Recreating the Design
1. Making the Design Responsive
1. Structuring the Page with Semantic HTML
1. Styling with Sass (SCSS)
1. Making it Interactive

### Foreword

### Recreating the Design

The first challenge when using the free version of Frontend Mentor is always to recreate the design as no design files are provided. The best way I've found to get accurate measurements is to recreate the design in Figma or Adobe XD.

From the ground up, I create and compose increasingly complex UI components. I save and reuse styles whenever possible to keep things organized and simple for the developer (me :smile:). Each time I use an instance of a component in a new, more complex component, I check how things resize, adding layout constraints as necessary.

The images below show the Figma components I used to build the design. A doted line surrounds each component and its variants.

_The beauty of using Figma components in this way is that a change in the original component populates everywhere that component is used (including inside other components)._

#### Input Components

![Input Components](./assets/solution/screenshots/input_card_components.png)

#### Input Card with Layouts

![Input Cards](./assets/solution/screenshots/input_cards.png)

#### Display Card & Components

![Display Card Components](./assets/solution/screenshots/display_card_components.png)

### Making the Design Responsive

Having only two fixed layouts is not fully embracing the spirit of responsive web design. I wanted the added challenge of developing several breakpoints, so I flexed my design muscles and specified how the page should resize using the mobile and desktop layouts as endpoints.

|                    Mobile Layout                    |                         Desktop Layout                          |
| :-------------------------------------------------: | :-------------------------------------------------------------: |
| ![Mobile Layout](./assets/design/mobile-design.jpg) | ![Desktop Layout](./assets/design/desktop-design-completed.jpg) |

For project demonstration, I decided that fluidly transitioning between breakpoints (matching card widths) was the priority; this lead to the midpoint (720px to 875px) looking uncomfortably wide, but remembering that this is a coding challenge, I kept it simple.

| Breakpoint |                        Min-Width to Max-Width                         |
| :--------: | :-------------------------------------------------------------------: |
|   375px    | ![Breakpoint Preview](./assets/solution/screenshots/breakpoint_0.png) |
|   576px    | ![Breakpoint Preview](./assets/solution/screenshots/breakpoint_1.png) |
|   720px    | ![Breakpoint Preview](./assets/solution/screenshots/breakpoint_2.png) |
|   875px    | ![Breakpoint Preview](./assets/solution/screenshots/breakpoint_3.png) |
|   1047px   | ![Breakpoint Preview](./assets/solution/screenshots/breakpoint_4.png) |
|   1155px   | ![Breakpoint Preview](./assets/solution/screenshots/breakpoint_5.png) |

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

## 💻 Sass Watch Command

```bash
sass -w ./assets/stylesheets/scss:./assets/stylesheets/css
```
