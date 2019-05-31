        
        
                let key2,
            sheetNum2,
            sheetType2;
        attachEvents();
        // GetSheetDone(KEY, 1, false, true).then((data) => {
        //     console.log('Data');
        //     console.log(JSON.stringify(data));
        // }).catch(err => {
        //     console.log('Error');
        //     console.log(err);
        // })
        function readValues() {
            key2 = "1sVBHWJLPGlH481C9JQqFhzNdAWVh9nSERodnZ37FTTY";
            sheetNum2 = "2";
            sheetType2 = "cols-rows";
        }
        function attachEvents() {

                readValues();
                console.log(key2, sheetNum, sheetType);
                let promise;
                switch (sheetType2) {
                    case 'cols':
                        promise = GetSheetDone.labeledCols(key2, 2);
                        break;
                    case 'cols-rows':
                        promise = GetSheetDone.labeledColsRows(key2, 2);
                        break;
                    case 'raw':
                    default:
                        promise = GetSheetDone.raw(key, sheetNum);
                        break;
                }
              promise.then((data) => {
                    console.log(data);
  
             //   var str = JSON.stringify(data).replace("]", "").replace("[", "").replace(",", "").replace(":", "");
             //                   var str = JSON.stringify(data);

                
                var len = Object.keys(data.data).length;             
                        var table = document.getElementById("Projects_Table");

var i;
for (i = 0; i < len; i++) {
  var table = document.getElementById("Projects_Table");
  var row = table.insertRow(i+1);
  
    var scan = Object.keys(data.data)[i];

  //data["address"]["streetName"];        // (2) array notation 

  var table_ref = row.insertCell(0).innerHTML = Object.keys(data.data)[i];
  var table_project_name = row.insertCell(1).innerHTML = (data.data)[scan]["client"];
  var table_revenue = row.insertCell(2).innerHTML = (data.data)[scan]["revenue"];
  var table_paid = row.insertCell(3).innerHTML = (data.data)[scan]["paid"];
  
  if((data.data)[scan]["status"] === "COMPLETED"){
  var table_status = row.insertCell(4).innerHTML = '<span class="badge badge-success">'+(data.data)[scan]["status"]+'</span>';
  }else {
    var table_status = row.insertCell(4).innerHTML = '<span class="badge badge-warning">'+(data.data)[scan]["status"]+'</span>';   
  }
}
                
                })


  }                 
 
        
