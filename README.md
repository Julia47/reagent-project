## Simple app for money managment
- gauge widget displays the share of expenses to cash-flow
- scatter chart displays all incomes and expenses by month (with structure by tags)
- user can add income/expense, for this choose money source, enter money, date, tag
- user can add/delete money source
- all history of transactions is saved in table

## What is currently included
- ClojureScript 
- Figwheel for interactive development
- Reagent for UI
- DataScript for db
- Highcharts library for scatter chart
- own gauge widget

## Run project
To build this app
1. run commands
   ```sh
   # for start the Figwheel compiler navigate to the project folder and run the following command in the terminal
   lein figwheel
   
   # for start - replit
   bin/lein figwheel
  
   ```
2. url  ->  http://localhost:3449/
