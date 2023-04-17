function insertLoans() {
    // Defining an array of all the loans
    const loans=[
        {
            "id":"6430648c505092074ef57248",
            "customerName": "Chris MacDonald",
            "firstName": "Christopher",
            "middleName": "John",
            "lastName": "MacDonald",
            "email": "cmacdo1@asu.edu",
            "phoneNumber": "584-439-1590",
            "dateOfBirth": "10/19/1983",
            "gender": "male",
            "createdDate": "2023-03-18",
            "modifiedDate": "2023-04-07",
            "isDeleted": "false"
        },
        {
            "id":"641633499660bf73f4d2f9bf",
            "customerName": "Vivian Morar",
            "phoneNumber": "492-517-3235",
            "address": "196 Salma Lights",
            "loanAmount": "$200,000",
            "interest": "25%",
            "loanTermYears": 40,
            "loanType": "Auto",
            "description": "Car Loan",
            "createdDate": "2023-05-25",
        },
        {
            "id":"64165be96f9cb9ae61d03883",
            "customerName": "Willie Little",
            "phoneNumber": "265-391-5600",
            "address": "656 Rippin Spring",
            "loanAmount": "$500,000",
            "interest": "8%",
            "loanTermYears": 25,
            "loanType": "Life",
            "description": "Life Insurance",
            "createdDate": "2020-04-30",
        },
        {
            "id":"64165c046f9cb9ae61d0388a",
            "customerName": "Ralph Hahn",
            "phoneNumber": "523-888-3267",
            "address": "240 Swaniawski Forks",
            "loanAmount": "$50,000",
            "interest": "25%",
            "loanTermYears": 10,
            "loanType": "Medical",
            "description": "Medical Loan",
            "createdDate": "2021-12-10",
        },
        {
            "id":"64162bff9660bf73f4d2f9a8",
            "customerName": "Pamela Bernier",
            "phoneNumber": "722-534-1503",
            "address": "4505 Dalton Creek",
            "loanAmount": "$1,000,000",
            "interest": "35%",
            "loanTermYears": 22,
            "loanType": "Boat",
            "description": "Boat Loan",
            "createdDate": "2020-01-13",
        }
    ];

    // This inserts the loan data into loanList.html
    var l = '<tbody>';
    for (i = 0; i < loans.length; i++) {
        l += '<tr>';
        l += '<td>' + loans[i].id + '</td>';
        l += '<td>' + loans[i].customerName + '</td>';
        l += '<td>' + loans[i].phoneNumber + '</td>';
        l += '<td>' + loans[i].address + '</td>';
        l += '<td>' + loans[i].loanAmount + '</td>';
        l += '<td>' + loans[i].interest + '</td>';
        l += '<td>' + loans[i].loanTermYears + '</td>';
        l += '<td>' + loans[i].loanType + '</td>';
        l += '<td>' + loans[i].description + '</td>';
        l += '<td>' + loans[i].createdDate + '</td>';
        l += '</tr>';
    }
    l += '</tbody>';
    document.getElementById('tableData').innerHTML = l;
};

insertLoans();