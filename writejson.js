jQuery(function () {
    readJSON=function () {
        $.ajax({
            url: "json",
            type: "GET",
            dataType: "JSON",
            context: this,
            success: function (data) {

                $("#jsontable").empty();
                var innertable= $("<table style= 'border:solid'> </table>").attr('id', 'innertable');

                for (i in data){
                    innertable.append("<tr> <td>"+data[i].firstname+"</td> <td>"+data[i].lastname+"</td><td>"+data[i].gender+"</td><td>"+data[i].age+"</td><td>"+data[i].city+"</td><td>"+data[i].telephone+"</td></tr>");
                }
               $("#jsontable").append(innertable)

            }
            }
        )
    }
})