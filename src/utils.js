
const pagination = (arr) => {
    const usersPerPage = 9
    const totalPages = Math.ceil(arr.length / usersPerPage)

    const newUserArr = Array.from({ length: totalPages }, (_, index) => {
        const start = index * usersPerPage
        const subArr = arr.slice(start, start + usersPerPage)
        return subArr
    })
    // console.log(newUserArr)
    return newUserArr

}

export { pagination }