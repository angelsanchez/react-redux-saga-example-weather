Feature: Search the city weather
  As a user
  I want to be able to find out the weather in the city

  Scenario: Search the Madrid weather successfully
    Given I see the weather search page
    When I write "Madrid" in the search input
    And I search the weather
    Then there is a new weather card with "Madrid, ES" title in the result list
