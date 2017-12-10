jQuery(function () {
    readJSON=function () {
        $.ajax({
            url: "json",
            type: "GET",
            dataType: "JSON",
            context: this,
            success: function (data) {
                for (i in data){
                    $("#innertable").append("<tr> <td>"+data[i].firstname+"</td> <td>"+data[i].lastname+"</td><td>"+data[i].gender+"</td><td>"+data[i].age+"</td><td>"+data[i].city+"</td><td>"+data[i].telephone+"</td></tr>");
                }
                document.getElementById("jsonbutton").style.display = "none";
                showTable();
            }
            }
        )
    }
})

function showsb()
{
      document.getElementById("mySidebar").style.display = "block";
}

function hidesb()
{
      document.getElementById("mySidebar").style.display = "none";
}

function hideJsonButton()
{
	document.getElementById("jsonbutton").style.display = "none";
}

function showTable()
{
	document.getElementById("jsontable").style.visibility = "visible";
}

function checkForm(form)
{
	var errors = [];
	//First name
	var nameregex = /^[a-z-áéűúőüöóí ,.'-]+$/i;
  	if(form.firstname.value == "")
  	{
  		errors.push("First name is empty!");
    }
    else if(!nameregex.test(form.firstname.value))
    {
    	errors.push("First name contains invalid characters!")
    }

    //Last name
    if(form.lastname.value == "")
    {
    	errors.push("Last name is empty!");
    }
    else if(!nameregex.test(form.lastname.value))
    {
    	errors.push("Last name contains invalid characters!");
    }

  	//Gender
  	var genders = document.getElementsByName('gender');
	var gender_value;
	for(var i = 0; i < genders.length; i++)
	{
    	if(genders[i].checked)
    	{
        	gender_value = genders[i].value;
    	}
	}

  	//Age
  	var ageregex = /^[1]?[0-9]?[0-9]?$/
  	if (form.age.value == "")
  	{
  		errors.push("Age is empty!");
  	}
  	else if (!ageregex.test(form.age.value))
  	{
  		errors.push("Age contains invalid characters!");
  	}

  	//City
  	if (form.city.value == "")
  	{
  		errors.push("City is empty!");
  	}
  	else if (!nameregex.test(form.city.value))
  	{
  		errors.push("City contains invalid characters!");
  	}

  	//Telephone
  	var phoneregex = /^[\d]{11}$/
  	if (form.telephone.value == "")
  	{
  		errors.push("Telephone is empty!");
  	}
  	else if (!phoneregex.test(form.telephone.value))
  	{
  		errors.push("Telephone contains invalid characters!");
  	}

  	if (errors.length > 0)
  	{
  		var msg = "ERRORS:\n\n";
  		for (var i = 0; i < errors.length; i++)
  		{
  			msg += errors[i] + "\n";
  		}
  		alert(msg);
  		return false;
  	}
  	else
  	{
		$("#innertable").append("<tr> <td>"+form.firstname.value+"</td> <td>"+form.lastname.value+"</td><td>"+gender_value+"</td><td>"+form.age.value+"</td><td>"+form.city.value+"</td><td>"+form.telephone.value+"</td></tr>");
  		clearForm(form);
  		showTable();
  		return false;
  	}
}

function clearForm(form)
{
	form.firstname.value = "";
	form.lastname.value = "";
	form.age.value = "";
	form.city.value = "";
	form.telephone.value = "";
}