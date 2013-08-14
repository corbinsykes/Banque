$(document).ready(function(){
  $('#withdraw').click(bankServices.showWithdraw);
  $('#deposit').click(bankServices.showDeposit);
  $('#add-account').click(bankServices.showAddAccount)
});

var bankServices = {
  showAddAccount: function(event){
    console.log(event);
    $.ajax({
      url: '/add',
      type: 'GET',
      dataType: 'script'
    });
  },
  addAccount: function(event){
    var accountName = $('input[placeholder=account-name]').val();
    var accountBalance = $('input[placeholder=starting-balance]').val();
    console.log(event);
    $.ajax({
      url: '/add',
      type: 'POST',
      dataType: 'script',
      data: {accountNameKey: accountName,
             accountBalanceKey: accountBalance}
    });
  },
  //Does an AJAX request to
  showWithdraw: function(event){
    console.log(event);
    $.ajax({
      url: '/withdraw',
      type: 'GET',
      dataType: 'script'
    });
  },
  accountWithdraw: function(event){
    console.log(event);
    //Get the value from the input field
    var withdrawAmount = $('input[name=amount]').val();
    //Choose an account from dropdown menu
    var withdrawAccount = $('select[name=withdraw-account]').val();
    //AJAX call to accounts#withdraw_funds
    $.ajax({
      url: '/withdraw',
      type: 'POST',
      //Setting key/value pairs (params) for post info in accounts#withdraw_funds
      data: {withdrawAmountKey: withdrawAmount,
             withdrawAccountKey: withdrawAccount},
      dataType: 'script'
    });
    //Update 'total-balance'
  },
  showDeposit: function(event){
    console.log(event);
    $.ajax({
      url: '/deposit',
      type: 'GET',
      dataType: 'script'
    });
  },
  accountDeposit: function(event){
    console.log(event);
    //Get the value from the input field
    var depositAmount = $('input[name=amount]').val();
    //Choose an account from dropdown menu
    var depositAccount = $('select[name=deposit-account]').val();
    //AJAX call to accounts#withdraw_funds
    $.ajax({
      url: '/deposit',
      type: 'POST',
      //Setting key/value pairs (params) for post info in accounts#withdraw_funds
      data: {depositAmountKey: depositAmount,
             depositAccountKey: depositAccount},
      dataType: 'script'
    });
    //Update 'total-balance'
  }
};