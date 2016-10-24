// userlist array to fill in the data
var userListData = [];

// DOM Ready?
$(document).ready(function(){

	// populate the user table on intial page load
	populateTable();
	// Username link click
    $('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);
});

function populateTable(){

	var tableContent = ' ';

	// jQuery AJAX call for JSON
	$.getJSON('/users/userlist', function(data){

		userListData = data;

		// for each item in JSON, add a new row and cells to the table
		$.each(data, function(){
			tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '">' + this.username + '</a></td>';
            tableContent += '<td>' + this.email + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
		});

		//insert the whole string into the html table
		$('#userList table tbody').html(tableContent);
	})
}

// show user information
function showUserInfo(event){

	// prevent link from firing
	event.preventDefault();

	//retreive username from link attr
	var thisUserName = $(this).attr('rel');

	//get index of object based on value

    var arrayPosition = userListData.map(function(arrayItem) { return arrayItem.username; }).indexOf(thisUserName);

    // Get our User Object
    var thisUserObject = userListData[arrayPosition];

    //Populate Info Box
    $('#userInfoName').text(thisUserObject.fullname);
    $('#userInfoAge').text(thisUserObject.age);
    $('#userInfoGender').text(thisUserObject.gender);
    $('#userInfoLocation').text(thisUserObject.location);
}


