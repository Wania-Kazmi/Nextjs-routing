# Route Groups

1. Nested folders are normally mapped to the URL paths.

## What if you don't want the folder to be included in the URL's path structure??

- For this we will make <b> Route Groups </b> to prevent the folder from being included in the route's URL path.

## Usage:

This allows you to organize your route segments and project files into logical groups without affecting the URL path structure.

- Organizing routes into groups e.g. by site section, intent, or team.
- Enabling nested layouts in the same route segment level:
  - Creating multiple nested layouts in the same segment, including multiple root layouts
  - Adding a layout to a subset of routes in a common segment

## How to create a route group?

By wrapping a folder's name in parenthesis: (folderName)

# Dynamic Routing:

When you don't know the exact segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time or prerendered at build time.

## How to create Dynamic segments?
* By wrapping a folder's name in square brackets: [folderName]. For example, [id] or [slug].
* Dynamic Segments are passed as the params prop to layout, page, route, and generateMetadata functions.