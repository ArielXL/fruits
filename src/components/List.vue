<template>
    <div>
        <ul class="list-group">
            <li v-for="(fruit, index) of sortFruits" 
                :key="index" 
                @click="incrementCount(index)"
                class="list-group-item d-flex justify-content-between align-items-center">
                {{ fruit.name }}
                <span class="badge bg-primary rounded-pill">{{ fruit.count }}</span>
            </li>
        </ul>
        <div class="d-grid gap-2">
            <button class="btn btn-danger" 
                    type="button" 
                    @click="resetCount">
                Reset
            </button>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from "vuex";

    export default {
        name: 'List',
        computed: {
            ...mapState(['fruits']),
            sortFruits() {
                return this.fruits.sort( (fruit1, fruit2) => fruit2.count - fruit1.count )
            }
        },
        methods: {
            ...mapMutations(['incrementCount', 'resetCount'])
        }
    }
</script>