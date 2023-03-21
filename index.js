const data = [
    {
        image: "https://placekitten.com/600/400",
        caption: "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
        type: "image",
        source_type: "facebook",
        source_link: "https://www.facebook.com/EmbedSocial/",
        date: "2018-03-12 03:00:00",
        likes: "123",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/100/100"
    },
    {
        image: "https://placekitten.com/600/410",
        caption: "Quisque metus nisi, consequat et molestie eget, facilisis ac odio. Nam lorem libero, efficitur ac velit at, egestas tempor arcu. Nullam pharetra ex eget orci lobortis malesuada. Maecenas eget porta felis. Aliquam porttitor, nibh nec ullamcorper fermentum, eros velit lobortis justo, pretium consectetur turpis enim ut nunc. Fusce convallis, ex ut ultrices sodales, ante quam venenatis arcu, vitae mollis magna urna vel eros. Aliquam a sapien nisi. Nullam convallis malesuada suscipit. ",
        type: "image",
        source_type: "instagram",
        source_link: "https://instagram.com/embedsocial/",
        date: "2019-01-12 03:00:00",
        likes: "0",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/150/100"
    },
    {
        image: "https://placekitten.com/600/420",
        caption: "",
        type: "image",
        source_type: "facebook",
        source_link: "https://instagram.com/embedsocial/",
        date: "2017-01-21 03:00:00",
        likes: "9866555",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/100/150"
    },
    {
        image: "https://placekitten.com/600/430",
        caption: "Etiam eu blandit nisi. Aliquam rutrum faucibus mauris, sed egestas odio viverra at. In elementum sit amet sapien vitae bibendum.",
        type: "image",
        source_type: "facebook",
        source_link: "https://www.facebook.com/EmbedSocial/",
        date: "2019-12-12 03:00:00",
        likes: "2",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/120/120"
    },
    {
        image: "https://placekitten.com/600/440",
        caption: "Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.",
        type: "image",
        source_type: "facebook",
        source_link: "https://instagram.com/embedsocial/",
        date: "2018-04-12 03:00:00",
        likes: "12343",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/50/50"
    },
    {
        image: "https://placekitten.com/600/440",
        caption: "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
        type: "image",
        source_type: "facebook",
        source_link: "https://www.facebook.com/EmbedSocial/",
        date: "2019-12-12 03:00:00",
        likes: "123",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/101/101"
    },
    {
        image: "https://placekitten.com/800/400",
        caption: "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
        type: "image",
        source_type: "facebook",
        source_link: "https://www.facebook.com/EmbedSocial/",
        date: "2019-12-12 03:00:00",
        likes: "12",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/150/120"
    },
    {
        image: "https://placekitten.com/600/500",
        caption: "Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.",
        type: "image",
        source_type: "facebook",
        source_link: "https://instagram.com/embedsocial/",
        date: "2017-12-12 03:00:00",
        likes: "23",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/140/140"
    },
    {
        image: "https://placekitten.com/700/400",
        caption: "Pellentesque lacinia volutpat turpis non fermentum. Cras at pellentesque augue. Aliquam eget metus sit amet turpis consectetur posuere.",
        type: "image",
        source_type: "facebook",
        source_link: "https://www.facebook.com/EmbedSocial/",
        date: "2017-12-08 03:00:00",
        likes: "0",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/100/100"
    },
    {
        image: "https://placekitten.com/700/500",
        caption: "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
        type: "image",
        source_type: "facebook",
        source_link: "https://www.facebook.com/EmbedSocial/",
        date: "2019-02-12 03:00:00",
        likes: "0",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/102/102"
    },
    {
        image: "https://placekitten.com/800/600",
        caption: "Aliquam odio libero, malesuada et iaculis a, facilisis bibendum dolor. Vivamus ultricies congue arcu eu porttitor. Integer libero tortor, volutpat a purus id, mattis tristique tortor. ",
        type: "image",
        source_type: "facebook",
        source_link: "https://www.facebook.com/EmbedSocial/",
        date: "2019-12-12 03:00:00",
        likes: "2",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/103/100"
    },
    {
        image: "https://placekitten.com/700/600",
        caption: "Duis in facilisis lectus.",
        type: "image",
        source_type: "facebook",
        source_link: "https://instagram.com/embedsocial/",
        date: "2020-12-12 03:00:00",
        likes: "1",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/40/100"
    },
    {
        image: "https://placekitten.com/1600/1400",
        caption: "Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
        type: "image",
        source_type: "facebook",
        source_link: "https://www.facebook.com/EmbedSocial/",
        date: "2019-12-15 03:00:00",
        likes: "2324",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/80/100"
    },
    {
        image: "https://placekitten.com/1600/400",
        caption: "Aliquam odio libero, malesuada et iaculis a, facilisis bibendum dolor.",
        type: "image",
        source_type: "facebook",
        source_link: "https://www.facebook.com/EmbedSocial/",
        date: "2019-10-12 03:00:00",
        likes: "1223",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/80/80"
    },
    {
        image: "https://placekitten.com/2000/4000",
        caption: "Quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
        type: "image",
        source_type: "facebook",
        source_link: "https://instagram.com/embedsocial/",
        date: "2016-12-12 03:00:00",
        likes: "12223",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/110/110"
    },
    {
        image: "https://placekitten.com/900/600",
        caption: " Suspendisse finibus lorem nibh, facilisis ullamcorper nunc consequat sit amet. Curabitur ultricies magna ante, ac eleifend lorem auctor porta. Nullam volutpat aliquet lorem, et posuere ex aliquet eu. Quisque elementum sem mauris, a mattis est scelerisque vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut quis massa eget ligula euismod sagittis id congue quam. Duis vestibulum eros sed tincidunt rutrum. Pellentesque in malesuada velit.",
        type: "image",
        source_type: "facebook",
        source_link: "https://www.facebook.com/EmbedSocial/",
        date: "2017-12-12 03:00:00",
        likes: "0",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/110/100"
    },
    {
        image: "https://placekitten.com/600/410",
        caption: "Quisque metus nisi, consequat et molestie eget, facilisis ac odio. Nam lorem libero, efficitur ac velit at, egestas tempor arcu. Nullam pharetra ex eget orci lobortis malesuada. Maecenas eget porta felis. Aliquam porttitor, nibh nec ullamcorper fermentum, eros velit lobortis justo, pretium consectetur turpis enim ut nunc. Fusce convallis, ex ut ultrices sodales, ante quam venenatis arcu, vitae mollis magna urna vel eros. Aliquam a sapien nisi. Nullam convallis malesuada suscipit. ",
        type: "image",
        source_type: "instagram",
        source_link: "https://instagram.com/embedsocial/",
        date: "2019-01-12 03:00:00",
        likes: "0",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/150/100"
    },
    {
        image: "https://placekitten.com/600/420",
        caption: "",
        type: "image",
        source_type: "facebook",
        source_link: "https://instagram.com/embedsocial/",
        date: "2017-01-21 03:00:00",
        likes: "9866555",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/100/150"
    },
    {
        image: "https://placekitten.com/600/430",
        caption: "Etiam eu blandit nisi. Aliquam rutrum faucibus mauris, sed egestas odio viverra at. In elementum sit amet sapien vitae bibendum.",
        type: "image",
        source_type: "facebook",
        source_link: "https://www.facebook.com/EmbedSocial/",
        date: "2019-12-12 03:00:00",
        likes: "2",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/120/120"
    },
    {
        image: "https://placekitten.com/600/440",
        caption: "Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.",
        type: "image",
        source_type: "facebook",
        source_link: "https://instagram.com/embedsocial/",
        date: "2018-04-12 03:00:00",
        likes: "12343",
        name: "John Smith",
        profile_image: "https://placekitten.com/g/50/50"
    }
]

let paginationCount = 4

function handlePostLike(index) {
    if (data[index].liked) {
        data[index].liked = false
        let currentLikes = Number(data[index].likes) - 1
        data[index].likes = currentLikes.toString()
        const currentPost = document.querySelectorAll('.post')[index]
        currentPost.querySelector('.likes-count').innerHTML = currentLikes.toString()
        currentPost.querySelector('#heartImg').setAttribute('src', './assets/icons/heart.svg')

    } else {
        data[index].liked = true
        let currentLikes = Number(data[index].likes) + 1
        data[index].likes = currentLikes.toString()
        const currentPost = document.querySelectorAll('.post')[index]
        currentPost.querySelector('.likes-count').innerHTML = currentLikes.toString()
        currentPost.querySelector('#heartImg').setAttribute('src', './assets/icons/hearted.svg')
    }
}

function loadPosts() {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';

    [...new Array(paginationCount)].forEach((counter, i) => {
        const postEl = document.createElement('div')
        postEl.className = 'post'
    
        postEl.innerHTML = `
                <div class="post__header">
                    <div class="post__header_user">
                        <img src="${data[i].profile_image}" alt="${data[i].name}">
                        <div class="post__header_user_name">
                            <h3>${data[i].name}</h3>
                            <span>${data[i].date}</span>
                        </div>
                    </div>
                    <a href="${data[i].source_link}" target="_blank" class="social-media">
                        <img src="./assets/icons/${data[i].source_type}.svg" alt="insta">
                    </a>
                </div>
                <div class="post_image">
                    <img src="${data[i].image}" alt="post">
                </div>
                <div class="post__content">
                    <p><a href="${data[i].source_link}" target="_blank">#Lorem</a>${data[i].caption}</p>
                </div>
                <div class="post_footer">
                    <img id="heartImg" onclick="handlePostLike(${i})" src="${data[i].liked ? './assets/icons/hearted.svg' : './assets/icons/heart.svg'}" alt="like">
                    <span class="likes-count">${data[i].likes}</span>
                </div>
        `
    
        postsContainer.appendChild(postEl)
    })

    paginationCount += 4
}

loadPosts()


const cardSpaceBetween = document.getElementById('cardSpaceBetween')

cardSpaceBetween.addEventListener('change', (event) => {
    document.querySelector('.posts').style.gap = event.target.value
})

const cardBackground = document.getElementById('cardBackgroundColor')

cardBackground.addEventListener('change', (event) => {
    document.querySelectorAll('.post').forEach((post) => post.style.backgroundColor = event.target.value)
})

const numberOfCols = document.getElementById('numberOfColumns')

numberOfCols.addEventListener('change', (event) => {
    if (event.target.value === 'dynamic') {
        document.querySelectorAll('.post').forEach((post) => {
            post.style.flex = 1
            post.style.width = 'auto'
        })
        return
    }
    
    const containerWidth = Math.round(document.querySelector('.posts').clientWidth / event.target.value);
    const gapsWidth = (event.target.value - 1) * Number(cardSpaceBetween.value.replace('px', ''))

    document.querySelectorAll('.post').forEach((post) => {
        post.style.width = `${containerWidth - gapsWidth}px`
        post.style.flex = 'auto'
    })
})
