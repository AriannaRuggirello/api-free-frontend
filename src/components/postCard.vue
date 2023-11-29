<script>
export default {
    name: 'postCard',
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="col-4 my-3 text-center">
        <div class="card">
            <img class="card-img-top" :src="post.image" alt="Card image cap">
            <div class="card-body">
                <h2>{{ post.title }}</h2>
                <p>{{ post.content }}</p>
                <p v-if="post.category">Category: {{ post.category.name }}</p>
                <p v-if="post.tags.length > 0">Tags:</p>
                <ul v-if="post.tags.length > 0">
                    <li v-for="(tag, index) in post.tags" :key="index">{{ tag.name }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
