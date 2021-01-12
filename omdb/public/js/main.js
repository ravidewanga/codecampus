var input = document.getElementById("search");

input.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) { 
        var search_data = this.value;
        fetch('http://localhost:3000/getDetails?search=' + search_data)
            .then(response => response.json())
            .then(data => { 
                var x = `<table>
                    <tbody>
                    <tr>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Rating</td>
                        <td></td>
                    </tr>
                </tbody>
            </table >`;
                var fetch_record = document.getElementById('fetch_record'); 
                fetch_record.innerHTML = x;
            });
    }
});
