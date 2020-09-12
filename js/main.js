var customStats;

function handleLoad() {
  console.log("Welcome to My Corona");
  customStats = {
    3166: new CustomStats(3166, 0),
    3249: new CustomStats(3249, 300)
  }

  fillData(3166);
  fillData(3249);
}

function fillData(postcode) {
  const url = `https://discover.data.vic.gov.au/api/3/action/datastore_search?resource_id=b952711e-c667-4e4f-b028-ef8af645d06b&limit=5&q=${postcode}`;
  const text = customStats[postcode];
  $.ajax({
    url: url,
    success: function(data) {
      const record = data.result.records[0];
      text.setStats(record.active, record.cases, record.new, record.data_date);
    }
  });
}
