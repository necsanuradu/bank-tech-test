# Screenshots


![Image 01-10-2021 at 09 27](https://user-images.githubusercontent.com/71831322/135591628-8e600a7c-74d4-45e8-ba91-fc35ae37f895.jpeg)

![Image 01-10-2021 at 09 23](https://user-images.githubusercontent.com/71831322/135591685-671a95bd-0bc6-443d-b8e7-1360b2a39167.jpeg)

# Bank-tech-test

## Logic

As we have discussed in one of our workshops for banks the common practice is not to store the state of the account, its balance, but knowing the initial balance £0 for any and all the accounts while processing in all the successful transactions operated on the account the balance is calculated every single time and verified across multiple systems.
In this exercise we do store the balance on each operation as an attribute NOT used in processing or decision making, but to be present in the statement as recorded last time (the balance still gets recalculated every time we interact with the program).
Do to its nature financially related the system will have multiple constrains referencing the input data before being passed towards execution, therefore avoiding error messages that could expose the system in any way at any level.


## Usage 
#### (in the browser console running SpecRunner.html)
### Instantiate the account operator class(with no account history)
``` 
let operator = new AccountOperator()
```
### Instantiate the account operator class(with some account history)
``` 
let operator = new AccountOperator([{ date: 21/10/2021, credit: 250, debit: 0 }, { date: 22/10/2021, credit: 0, debit: 150 }])
```
### Request statement
``` 
operator.statement
```
### Deposit 300 
``` 
operator.creditAccount(300)
```
### Withdraw 300
``` 
operator.debitAccount(300)
```


## Input - output table
| Input  | Output |
| ------------- | ------------- |
| Deposit | |
| Withdraw  |  |
| Request Balance | numeric value |
| Bank statement | transactions(date, credit, debit) |

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
 
## Running the programm
 * please run in your terminal once located inside the main directory of this application:
 #### open SpecRunner.html

## Technologies: 
* programming - Javascript
* testing environment -  Jasmine 3.3
* serving - open your SpecRunner.html file directly on your browser


## Model table
| Class | Method | Attribute |
|--------------------|--------------------|--------------------|
| UserAccount |creditAccount(), debitAccount() | balance, statement |


## Tests
 * 24 in total
 * 9 testing interactive behaviour - expected response
 * 15 testing edge cases


## User stories
```
As a user
In order to debit my account
I should be able to introduce the desired ammount 
```
```
As a user
In order to credit my account
I should be able to introduce the desired ammount 
```
```
As a user
In order to see my transactions
I should be able to get/print a well defined(date|time|type|ballance) bank statement for my account
```



