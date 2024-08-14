Feature: DOM 範例測試

  說明於此

  @smoke
  Scenario: Counter Add
    Given Counter Default
    When Counter Add
    Then Counter Should Add 1

  @smoke
  Scenario: Counter Subtract
    Given Counter Default
    When Counter Subtract
    Then Counter Should Subtract 1