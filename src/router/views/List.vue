<template>
  <div>
    <div class="dropdown mb-4">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        ALL
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">DONE</a></li>
        <li><a class="dropdown-item" href="#">SPORTS</a></li>
        <li><a class="dropdown-item" href="#">JOB</a></li>
        <li><a class="dropdown-item" href="#">STUDY</a></li>
        <li><a class="dropdown-item" href="#">CHORE</a></li>
        <li><a class="dropdown-item" href="#">HOBBY</a></li>
        <li><a class="dropdown-item" href="#">CLUB</a></li>
      </ul>
    </div>

    <div class="input-group mb-3">
      <button
        class="btn btn-outline-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categories
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">SPORTS</a></li>
        <li><a class="dropdown-item" href="#">JOB</a></li>
        <li><a class="dropdown-item" href="#">STUDY</a></li>
        <li><a class="dropdown-item" href="#">CHORE</a></li>
        <li><a class="dropdown-item" href="#">HOBBY</a></li>
        <li><a class="dropdown-item" href="#">CLUB</a></li>
      </ul>
      <input
        type="text"
        class="form-control"
        aria-label="Text input with dropdown button"
      />
    </div>
    <ul class="list-group"></ul>
  </div>
</template>

<script>
export default {
  name: "list",
};
</script>

<style></style>
