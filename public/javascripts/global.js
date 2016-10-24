// userlist array to fill in the data
var userListData = [];

// DOM Ready?
$(document).ready(function(){

	// populate the user table on intial page load
	populateTable();
});

function populateTable(){

	var tableContent = ' ';

	// jQuery AJAX call for JSON
	$.getJSON('/users/userlist', function(data){

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