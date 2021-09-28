# Bank-tech-test

## Logic
```
As we have discussed in one of our workshops in case of banks the common practice does not store the state of the account, its balance but knowing the initial balance £0 for any and all the accounts while logging in all the succesfull transactions opearated on an account the balance is finalised and verified across multiple systems.
Do to its nature financially related the system will have multiple constrains referencing the input data before being passed towards execution therefore avoiding error messages that could expose the system in any way at any level.
```

## Input - output table
| Input  | Output |
| ------------- | ------------- |
| Deposit | Confirmation - You have sucessfully deposited £.. into your account|
| Withdraw  |  Confirmation - You have successfully debited your account with the amount of £ ..|
| Request Balance | numeric value |
| Bank statement | transactions(date, credit, debit, ballance) |

## Edge cases
### - in the non-testing environment:
The edge cases described below will not tolerate invalid input and will respond negating the execution with the same for all message(We are really sorry but your transaction has been denied, Please see a bank operator at your next branch or call this number (000)0000000).
### - in the testing invironment the negation of execution message will return relevant information for the reason of denial.
* the input data will be of NaN(not a number) type
* the input data in case of a debit operation will exceed the current balance of the account(we will discuss with our client if maximum transaction limit is intented for both credit and debit operators).
* the history list of operations will include invalid data date, credit or debit related
* running the history operations the balance will have at any time a negative value


## Persistance 
 * Data will NOT persist during this exercise

## Model 
 * The AccountOperator class includes the private methods for both credit and debit operations in addition to the statement and balance attributes(while read using get they execute the #runOperations private function), the statement will serve a readable view with all the transactions executed within the requested timeframe.
 
## running the programm
 * please run in your terminal once located inside the main directory of this application:
 #### open SpecRunner.html

## Technologies: 
* programming - Javascript
* testing envoronment -  Jasmine 3.3
* serving - open your SpecRunner.html file directly on your browser


## Model table
| Class | Method | Attribute |
|--------------------|--------------------|--------------------|
| UserAccount |creditAccount(), debitAccount() | balance, statement |


## Tests
 * 23 test in total
 * 9 testing interactive behaviour - expected response
 * 14 testing edge cases


## User stories
```
As a user
In order to debit my account
I should be able to introduce the ammount aware of its minimum/maximum limits
```
```
As a user
In order to credit my account
I should be able to introduce the ammount aware of its current ballance
```
```
As a user
In order to see my transactions
I should be able to get/print a well defined(date|time|type|ballance) bank statement for my account
```


