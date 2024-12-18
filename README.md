# MongoDB $inc Operator Unexpected Behavior with Non-Existent Fields

This repository demonstrates an uncommon error related to the MongoDB `$inc` operator when used on a field that does not yet exist in a document.  The `$inc` operator, while normally convenient for incrementing or decrementing numeric values, does not automatically create a field if it doesn't exist with a negative value.

## Problem:

The standard `$inc` operation only increments.  If the field doesn't exist, it sets it to the increment value. Attempting to create a field with a negative initial value via `$inc` fails.

## Solution:

This solution uses the `$setOnInsert` operator within the `$inc` update to ensure that the field is created and set to the intended negative value only if the document is new.  For existing documents, only the increment will be performed. This resolves the issue by handling both scenarios in a clean manner.
