function fetchUserDataAndPosts(userId) {
    const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    return new Promise((resolve, reject) => {
        fetch(userUrl)
            .then(response => response.json())
            .then(user => {
                fetch(postsUrl)
                    .then(response => response.json())
                    .then(posts => {
                        resolve({
                            user,
                            posts
                        });
                    })
                    .catch(error => reject(error));
            })
            .catch(error => reject(error));
    });
}

// Example usage:
fetchUserDataAndPosts(1)
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
