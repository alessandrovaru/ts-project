import _ from 'lodash';


const data = [
  {
    username: 'ale',
    role: 'admin'
  },
  {
    username: 'joe',
    role: 'user'
  },
  {
    username: 'jane',
    role: 'admin'
  }
]

const rta = _.groupBy(data, (item)=> item.role);

console.log(rta);
