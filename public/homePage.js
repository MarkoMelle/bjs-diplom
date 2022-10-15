
// Выход из личного кабинета
const logoutButton = new LogoutButton();

logoutButton.action = function () {
   ApiConnector.logout(response => {
      if (response.success) {
         location.reload();
      };
   })
}

// Получение информации о пользователе

ApiConnector.current(response => {
   if (response.success) {
      ProfileWidget.showProfile(response.data);
   };
});

// Получение текущих курсов валюты

const ratesBoard = new RatesBoard();

function ratesBoardUpdate() {
   ApiConnector.getStocks(response => {
      if (response.success) {
         ratesBoard.clearTable();
         ratesBoard.fillTable(response.data);
      };
   });
};

ratesBoardUpdate();

setInterval(() => ratesBoardUpdate(), 60000);


const moneyManager = new MoneyManager();

moneyManager.addMoneyCallback = function (data) {
   ApiConnector.addMoney(data, (response) => {
      if (response.success) {
         ProfileWidget.showProfile(response.data);
         moneyManager.setMessage(true, 'Успешно');
      } else {
         moneyManager.setMessage(false, response.error);
      }
   })
};

moneyManager.conversionMoneyCallback = function (data) {
   ApiConnector.convertMoney(data, (response) => {
      if (response.success) {
         ProfileWidget.showProfile(response.data);
         moneyManager.setMessage(true, 'Успешно');
      } else {
         moneyManager.setMessage(false, response.error);
      }
   })
};

moneyManager.sendMoneyCallback = function (data) {
   ApiConnector.transferMoney(data, (response) => {
      if (response.success) {
         ProfileWidget.showProfile(response.data);
         moneyManager.setMessage(true, 'Успешно');
      } else {
         moneyManager.setMessage(false, response.error);
      }
   })
}


