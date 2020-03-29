<template>
    <div class="cinema__header">
        <div class="cinema__header-wrapper">
            <h1 class="cinema__title">Сеансы</h1>

            <a class="button cinema__add-session" href="../add.html">
                <i class="fas fa-plus"></i>
            </a>
        </div>
    </div>

    <div class="cinema__list-wrapper">
        <h4 class="cinema__list-title">
            Список сеансов
        </h4>

        <div class="cinema__list">
            <div class="cinema__film js-item">
                <p class="cinema__film-title">
                    Furious
                </p>

                <p class="cinema__film-date">
                    2000-09-20
                </p>

                <div class="cinema__film-controls">
                    <a class="button cinema__film-edit js-film-edit" href="../edit.html">
                        <i class="far fa-edit"></i>
                    </a>

                    <button class="button cinema__film-remove js-film-remove">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>