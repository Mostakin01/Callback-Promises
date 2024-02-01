async function fetchMultipleData(urls) {
    try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => response.json()));
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}

const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    // Add more URLs as needed
];

fetchMultipleData(urls).then(data => console.log(data));
