<template>
  <q-page>
    <div class="row">
    <q-table
      title="Treats"
      :rows="posts"
      :columns="columns"
      row-key="name"
      class="col"
    />
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
      return {
          columns: [
          {
              name: 'id',
              label: 'Id Post',
              field: 'id',
              align: 'left',
              sortable: true
            },
            {
              name: 'title',
              label: 'Title',
              field: 'title',
              align: 'left',
              sortable: true
            }
          ],
          posts: []
        }
    },
    mounted () {
      this.getPosts()
    },
    methods: {
      getPosts() {
          this.$axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((res) => {
            this.posts = res.data
            console.log(res.data)
            })
          .catch((err) => {
              console.log(err)
            })
        }
    },  
}
</script>
