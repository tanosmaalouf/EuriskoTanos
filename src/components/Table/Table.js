const Table = ({ data }) => {
  console.log(data)
  const search = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  return (
    <div>
      <input style={{
        backgroundImage: 'url(/css/searchicon.png)',
        backgroundPosition: '10px 12px',
        backgroundRepeat: 'no-repeat',
        width: '20%',
        fontSize: '16px',
        padding: '12px 20px 12px 40px',
        border: '1px solid #ddd',
        marginBottom: '12px',
      }} type="text" id="myInput" onChange={search} placeholder="Search by title..." />
      <table id="myTable">
        {data?.docs?.map((doc) => (
          <tbody key={doc.abstract}>
          <tr key={doc.abstract}>
            <td><h4>{doc.headline.main}</h4></td>
            <td>{doc.abstract}{'('}{doc.source + ',' + doc.document_type + ',' + doc.pub_date}{')'}</td>
          </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Table;