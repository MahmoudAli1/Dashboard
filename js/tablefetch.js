        
        
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

  row.insertCell(0).innerHTML = Object.keys(data.data)[i];
  row.insertCell(1).innerHTML = (data.data)[scan]["client"];
  row.insertCell(2).innerHTML = (data.data)[scan]["project"];
  row.insertCell(3).innerHTML = (data.data)[scan]["due"];
  row.insertCell(4).innerHTML = (data.data)[scan]["revenue"];
  
  if((data.data)[scan]["funds"] === "COMPLETED"){
    row.insertCell(5).innerHTML = '<span class="badge badge-success" style="font-size:15px;">'+(data.data)[scan]["funds"]+'</span>';
  }else if((data.data)[scan]["funds"] === "INCOMPLETE"){
    row.insertCell(5).innerHTML = '<span class="badge badge-danger" style="font-size:15px;">'+(data.data)[scan]["remains"]+'</span>';   
  }else{
    row.insertCell(5).innerHTML = '<span class="badge badge-primary" style="font-size:15px;">'+(data.data)[scan]["remains"]+'</span>'; 
  }
}
                
                })


  }                 
 
