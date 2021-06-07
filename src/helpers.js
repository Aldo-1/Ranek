export function serialize(obj){
  let query = ''
  Object.keys(obj).forEach((key) => {
   query += `&${key}=${obj[key]}`
  })
  return query
}