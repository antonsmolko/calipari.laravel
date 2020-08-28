import swal from 'sweetalert2'

export const createMethod = {
    methods: {
        create({ sendData, title, successText, redirectRoute, storeModule = null, action = 'store' }) {
            const module = storeModule ? `${storeModule}/` : '';

            return this.$store.dispatch(`${module}${action}`, sendData)
                .then(() => {
                    this.$router.push(redirectRoute);
                    // window.history.length > 1 ? this.$router.go(-1) : this.$router.push(redirectRoute);

                    return swal.fire({
                        title: successText,
                        text: `«${title}»`,
                        timer: 2000,
                        showConfirmButton: false,
                        icon: 'success'
                    });
                });
        }
    }
}

export const updateMethod = {
    methods: {
        update ({ sendData, title, redirectRoute, successText, storeModule = null }) {
            const module = storeModule ? `${storeModule}/` : '';

            return this.$store.dispatch(`${module}update`, sendData)
                .then(() => {
                    this.$router.push(redirectRoute);
                    // window.history.length > 1 ? this.$router.go(-1) : this.$router.push(redirectRoute);

                    return swal.fire({
                        title: successText,
                        text: `«${title}»`,
                        timer: 2000,
                        showConfirmButton: false,
                        icon: 'success'
                    });

                });
        }
    }
}

export const deleteMethod = {
    methods: {
        delete({
            payload,
            title,
            alertText,
            successText,
            storeModule = null,
            redirectRoute = null,
            tableMode = false,
            action = 'delete',
            force = false
        }) {
            const module = storeModule ? `${storeModule}/` : '';
            const method = force ? 'forceDelete' : action;

            return deleteSwalFireConfirm(alertText)
                .then((result) => {
                    if (result.value) {
                        return this.$store.dispatch(`${module}${method}`, { payload, tableMode })
                            .then(() => {
                                if (redirectRoute) {
                                    this.$router.push(redirectRoute);
                                    // window.history.length > 1
                                    //     ? this.$router.go(-1)
                                    //     : this.$router.push(redirectRoute);
                                }

                                return deleteSwalFireAlert(successText, title);
                            });
                    }
            });
        },
    }
}

export const deleteImageByIndexMethod = {
    methods: {
        deleteImageByIndex({
           id,
           index,
           alertText,
           successText,
           storeModule = null}) {
            return deleteSwalFireConfirm(alertText)
                .then((result) => {
                    if (result.value) {
                        return this.$store.dispatch(`${storeModule}/deleteImageByIndex`, { id, index })
                            .then(() => deleteSwalFireAlert(successText, index));
                    }
                });
        },
    }
}

const deleteSwalFireConfirm = alertText => {
    return swal.fire({
        title: 'Вы уверены?',
        text: `Данное действие удалит ${alertText} безвозвратно!`,
        icon: 'warning',
        showCancelButton: true,
        customClass: {
            confirmButton: 'md-button md-success btn-fill',
            cancelButton: 'md-button md-danger btn-fill'
        },
        confirmButtonText: 'Удалить',
        cancelButtonText: 'Отменить',
        buttonsStyling: false
    })
}

const deleteSwalFireAlert = (successText, title) => {
    return swal.fire({
        title: successText,
        text: `«${title}»`,
        timer: 2000,
        icon: 'success',
        showConfirmButton: false
    })
}

export const uploadMethod = {
    methods: {
        async upload ({ uploadFiles, type = null, id = null, storeModule = null }) {
            const files = Array.from(uploadFiles);
            const module = storeModule ? storeModule : 'categories';

            id
                ? await this.$store.dispatch(`${module}/uploadImages`, { files, id, type })
                : await this.$store.dispatch('images/store', files);

            return await swal.fire({
                title: 'Изображения загружены!',
                text: '',
                timer: 2000,
                showConfirmButton: false,
                icon: 'success'
            });
        }
    }
}

export const imageAddMethod = {
    methods: {
        addImages ({ id, data }) {
            this.$store.dispatch('categories/addSelectedImages',{ id, data })
                .then(() => {
                    this.$router.push({ name: 'cms.catalog.categories.images', params: { id } });

                    return swal.fire({
                        title: 'Изображения добавлены!',
                        text: '',
                        timer: 2000,
                        showConfirmButton: false,
                        icon: 'success'
                    });
                });
        }
    }
}

export const subCategoryImageAddMethod = {
    methods: {
        addImages ({ type, id, data, redirectRoute }) {
            this.$store.dispatch('subCategories/addSelectedImages', { type, id, data })
                .then(() => {
                    this.$router.push(redirectRoute);

                    return swal.fire({
                        title: 'Изображения добавлены!',
                        text: '',
                        timer: 2000,
                        showConfirmButton: false,
                        icon: 'success'
                    });
                });
        }
    }
}
