<script>
        function submitForm() {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            var dob = document.getElementById('dob').value;
            var terms = document.getElementById('terms').checked;

            if (name && email && password && dob && terms) {
                var table = document.getElementById('entriesTable').getElementsByTagName('tbody')[0];
                var newRow = table.insertRow(table.rows.length);

                var cell1 = newRow.insertCell(0);
                var cell2 = newRow.insertCell(1);
                var cell3 = newRow.insertCell(2);
                var cell4 = newRow.insertCell(3);
                var cell5 = newRow.insertCell(4);

                cell1.innerHTML = name;
                cell2.innerHTML = email;
                cell3.innerHTML = password;
                cell4.innerHTML = dob;
                cell5.innerHTML = terms ? 'Accepted' : 'Not Accepted';

                // Clear form fields and messages
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';
                document.getElementById('dob').value = '';
                document.getElementById('terms').checked = false;

                // Hide required messages
                document.getElementById('nameRequired').style.display = 'none';
                document.getElementById('emailRequired').style.display = 'none';
                document.getElementById('passwordRequired').style.display = 'none';
                document.getElementById('dobRequired').style.display = 'none';
                document.getElementById('termsRequired').style.display = 'none';
            } else {
                // Display required messages
                document.getElementById('nameRequired').style.display = name ? 'none' : 'block';
                document.getElementById('emailRequired').style.display = email ? 'none' : 'block';
                document.getElementById('passwordRequired').style.display = password ? 'none' : 'block';
                document.getElementById('dobRequired').style.display = dob ? 'none' : 'block';
                document.getElementById('termsRequired').style.display = terms ? 'none' : 'block';
            }
        }
    </script>
