<template>
  <div>
    <div class="dropdown">
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
    <ul class="list-group">
      <li class="list-group-item">
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          id="firstCheckboxStretched"
        />
        <label
          class="form-check-label stretched-link"
          for="firstCheckboxStretched"
          >First task</label
        >
      </li>
      <li class="list-group-item">
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          id="secondCheckboxStretched"
        />
        <label
          class="form-check-label stretched-link"
          for="secondCheckboxStretched"
          >Second task</label
        >
      </li>
      <li class="list-group-item">
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          id="thirdCheckboxStretched"
        />
        <label
          class="form-check-label stretched-link"
          for="thirdCheckboxStretched"
          >Third task</label
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "list",
};
</script>

<style></style>
