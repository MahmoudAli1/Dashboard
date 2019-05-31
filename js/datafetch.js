var initial_investment_returned = document.getElementById("initial_investment_returned");
var operating_cost = document.getElementById("operating_cost");
var total_revenue_percent = document.getElementById("total_revenue_percent");
var total_revenue = document.getElementById("total_revenue");
var revenue_bar = document.getElementById("revenue_bar");
var avg_profit_margin_percent = document.getElementById("avg_profit_margin_percent");
var profit = document.getElementById("profit");
var profit_bar = document.getElementById("profit_bar");
var roic = document.getElementById("roic");
var roic_bar = document.getElementById("roic_bar");
          

          
var share_co = document.getElementById("share_co");
var share_jaali = document.getElementById("share_jaali");
var share_feras = document.getElementById("share_feras");
var share_alaa = document.getElementById("share_alaa");
var share_mahmoudh = document.getElementById("share_mahmoudh");
var share_sultan = document.getElementById("share_sultan");
var share_ekhwan = document.getElementById("share_ekhwan");
var share_quraishi = document.getElementById("share_quraishi");


      
      
        let key,
            sheetNum,
            sheetType;
        attachEvents();
        // GetSheetDone(KEY, 1, false, true).then((data) => {
        //     console.log('Data');
        //     console.log(JSON.stringify(data));
        // }).catch(err => {
        //     console.log('Error');
        //     console.log(err);
        // })
        function readValues() {
            key = "1sVBHWJLPGlH481C9JQqFhzNdAWVh9nSERodnZ37FTTY";
            sheetNum = "1";
            sheetType = "cols-rows";
        }
        function attachEvents() {

                readValues();
                console.log(key, sheetNum, sheetType);
                let promise;
                switch (sheetType) {
                    case 'cols':
                        promise = GetSheetDone.labeledCols(key, 1);
                        break;
                    case 'cols-rows':
                        promise = GetSheetDone.labeledColsRows(key, sheetNum);
                        break;
                    case 'raw':
                    default:
                        promise = GetSheetDone.raw(key, sheetNum);
                        break;
                }
              promise.then((data) => {
                    console.log(data);
  
                var str = JSON.stringify(data).replace("]", "").replace("[", "").replace(",", "").replace(":", "");


                
                
initial_investment_returned.value = data.data.initial_investment_returned.sharessar;
operating_cost.innerHTML = data.data.operating_cost.sharessar;
total_revenue_percent.innerHTML = data.data.total_revenue_percent.sharessar+" %";
total_revenue.innerHTML = data.data.total_revenue.sharessar;
revenue_bar.style.width = data.data.total_revenue_percent.sharessar+"%";
avg_profit_margin_percent.innerHTML = data.data.profit_bar.sharessar+" %";
profit.innerHTML = data.data.profit.sharessar;
profit_bar.style.width = data.data.profit_bar.sharessar+"%";
roic.innerHTML = data.data.roic.sharessar+" %";
roic_bar.value = data.data.roic_bar.sharessar;
      

share_co.innerHTML = data.data.Co.sharessar;
share_jaali.innerHTML = data.data.Jaali.sharessar;
share_feras.innerHTML = data.data.Feras.sharessar;
share_alaa.innerHTML = data.data.Alaa.sharessar;
share_mahmoudh.innerHTML = data.data.Mahmoud.sharessar;
share_sultan.innerHTML = data.data.Sultan.sharessar;
share_ekhwan.innerHTML = data.data.Ekhwan.sharessar;
share_quraishi.innerHTML = data.data.Quraishi.sharessar;
                
                })


  }             
