<template>
  <div class="w-full md:w-1/2 lg:w-1/3">
    <button
      @click="hasHistory() ? $router.go(-1) : $router.push('/')"
      class="mb-4 font-light text-gray-500 hover:text-gray-700"
    >
      <font-awesome-icon icon="chevron-left" /> Go back
    </button>
    <h2 class="text-3xl mb-5 font-light text-gray-700">Add new task</h2>
    <form @submit.prevent="createTask">
      <div class="mb-5">
        <label for="title" class="block mb-2">Title</label>
        <input
          class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
          type="text"
          v-model="task.title"
          placeholder="Enter task title"
        />
        <p v-if="validationErrors.title" class="my-1 text-red-400 font-light">
          {{ validationErrors.title[0] }}
        </p>
      </div>
      <div class="mb-5">
        <label for="priority" class="block mb-2">Priority</label>
        <v-select
          label="name"
          :options="priorities"
          v-model="task.priority"
        ></v-select>
      </div>
      <div class="mb-5">
        <label for="status" class="block mb-2">Status</label>
        <v-select
          label="name"
          :options="statuses"
          v-model="task.status"
        ></v-select>
      </div>
      <div class="mb-5">
        <label for="details" class="block mb-2">Details</label>
        <textarea
          class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400 resize-none"
          rows="6"
          v-model="task.details"
        ></textarea>
        <p v-if="validationErrors.details" class="my-1 text-red-400 font-light">
          {{ validationErrors.details[0] }}
        </p>
      </div>
      <button
        class="bg-blue-400 font-light px-3 py-1 mb-2 rounded text-blue-100 hover:text-white hover:bg-blue-500"
        type="submit"
      >
        Create
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";
import SetAlert from "../../functions/SetAlert";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      task: {
        title: "",
        details: "",
        color: "",
        status: "",
      },
      validationErrors: [],
    };
  },
  methods: {
    createTask() {
      axios
        .post(process.env.VUE_APP_API_URL + "tasks", this.task, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("myapp_token"),
          },
        })
        .then((response) => {
          console.log(response.data);
          SetAlert("Saved", "You have added a new task!", "success");
          this.$store.dispatch("tasks", response.data.tasks);
          this.$store.dispatch("priorities", response.data.priorities);
          router.push({ name: "Tasks" });
        })
        .catch((error) => {
          this.validationErrors = error.response.data.errors;
        });
    },
    hasHistory() {
      return window.history.length > 2;
    },
  },
  computed: {
    ...mapGetters(["statuses", "priorities"]),
  },
};
</script>
