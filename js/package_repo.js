function WriteTable(data) {
  var row = $("<tr />");
  $("#contenttable").append(row);
  row.append($("<th>Repository Name</th>"));
  row.append($("<th>Pool Name</th>"));
  row.append($("<th>Package Name</th>"));
  row.append($("<th>Package Version</th>"));

  for(ele in data)
  {
      WriteRow(data,ele);
  }
}

function WriteRow(data,ele) {
  var row = $("<tr />");
  $("#contenttable").append(row);
  var th = $('<th />')
  th.append(ele);
  row.append(th);
  var i=0;
  var flag = false;
  for(e in data[ele])
  {
      if(flag === false)
      {
          var td = $('<td />');
          td.append(e);
          row.append(td);
          var c = 0;
          flag2 = false;
          for(j in data[ele][e])
          {
              if(flag2 === false)
              {
                  row.append($("<td>"+data[ele][e][j]["Name"]+"</td>"));
                  row.append($("<td>"+data[ele][e][j]["Version"]+"</td>"));
                  flag2 = true;
              }
              else
              {
                  var innerRow = $("<tr />");
                  $("#contenttable").append(innerRow);
                  innerRow.append($("<td>"+data[ele][e][j]["Name"]+"</td>"));
                  innerRow.append($("<td>"+data[ele][e][j]["Version"]+"</td>"));
              }
              c++;
              i++;

        }
          td.attr('rowspan',c);
          flag = true;
      }
      else
      {
        var innerRow = $("<tr />");
        $("#contenttable").append(innerRow);
        var td = $('<td />');
        td.append(e);
        innerRow.append(td);
        var c = 0;
        flag2 = false;
        for(j in data[ele][e])
        {
            if(flag2 === false)
            {
                innerRow.append($("<td>"+data[ele][e][j]["Name"]+"</td>"));
                innerRow.append($("<td>"+data[ele][e][j]["Version"]+"</td>"));
                flag2 = true;
            }
            else
            {
                var innerRow2 = $("<tr />");
                $("#contenttable").append(innerRow2);
                innerRow2.append($("<td>"+data[ele][e][j]["Name"]+"</td>"));
                innerRow2.append($("<td>"+data[ele][e][j]["Version"]+"</td>"));
            }
            c++;
            i++;
        }
        td.attr('rowspan',c);
          }
  }
  th.attr('rowspan',i);
}
function read_json(){

  $.ajax({
    url:'json/package_repo/output_repo.json',
    dataType:'json',
    type:'get',
    cache:false,
    success:function(data){
      WriteTable(data);
    }
  });
}
$(document).ready(function(){
  var year="2015"
  $("#dropdownMenu1").html(year);
  read_json();
  $("#y2015").click(function(){
      $("#contenttable").empty();
    var year = $(this).text();
      $("#dropdownMenu1").html(year);
      read_json();
    });
});
