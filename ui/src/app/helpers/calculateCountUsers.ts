export default function callculateCountUsersInInterest(data) {
  const usersCount = data.reduce((sum, current) => {
    return sum + current.users;
  }, 0);

  const cityData = data.map(c => ({
    attribute: c.city,
    value: Math.round((c.users * 100) / usersCount),
  }));

  cityData.sort((a, b) => (a.value < b.value ? 1 : -1));

  const others = callculateOthersCity(cityData.slice(0, 4));
  return [...cityData.slice(0, 4), others];
}

function callculateOthersCity(data) {
  let result = 0;
  data.forEach(element => {
    result += element.value;
  });
  return { attribute: 'Others', value: 100 - result };
}
