import swal from 'sweetalert2';

export const createMethod = {
    methods: {
        async create ({ sendData, title, successText, redirectRoute, storeModule = null, action = 'store' }) {
            this.$store.commit('SET_LOADING', true);
            const module = storeModule ? `${storeModule}/` : '';

            await this.$store.dispatch(`${module}${action}`, sendData)
            await this.$router.push(redirectRoute);
            // window.history.length > 1 ? this.$router.go(-1) : this.$router.push(redirectRoute);
            this.$store.commit('SET_LOADING', false);

            return swal.fire({
                title: successText,
                text: `«${title}»`,
                timer: 2000,
                showConfirmButton: false,
                icon: 'success'
            });
        }
    }
}

export const updateMethod = {
    methods: {
        async update ({ sendData, title, successText, redirectRoute = null, storeModule = null }) {
            this.$store.commit('SET_LOADING', true);
            const module = storeModule ? `${storeModule}/` : '';

            await this.$store.dispatch(`${module}update`, sendData)
            if (redirectRoute) {
                window.history.length > 1
                    ? this.$router.go(-1)
                    : await this.$router.push(redirectRoute);
            }
            // window.history.length > 1 ? this.$router.go(-1) : this.$router.push(redirectRoute);
            this.$store.commit('SET_LOADING', false);

            return swal.fire({
                title: successText,
                text: `«${title}»`,
                timer: 2000,
                showConfirmButton: false,
                icon: 'success'
            });
        }
    }
}

export const deleteMethod = {
    methods: {
        async delete ({
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

            const result = await deleteSwalFireConfirm(alertText)
            if (result.value) {
                this.$store.commit('SET_LOADING', true);
                await this.$store.dispatch(`${module}${method}`, { payload, tableMode })
                if (redirectRoute) {
                    await this.$router.push(redirectRoute);
                    // window.history.length > 1
                    //     ? this.$router.go(-1)
                    //     : this.$router.push(redirectRoute);
                }
                this.$store.commit('SET_LOADING', false);

                return deleteSwalFireAlert(successText, title);
            }
        },
    }
}

export const deleteImageByIndexMethod = {
    methods: {
        async deleteImageByIndex ({
           id,
           index,
           alertText,
           successText,
           storeModule = null}) {
            this.$store.commit('SET_LOADING', true);

            const result = await deleteSwalFireConfirm(alertText)
            if (result.value) {
                await this.$store.dispatch(`${storeModule}/deleteImageByIndex`, { id, index })
                this.$store.commit('SET_LOADING', false);
                await deleteSwalFireAlert(successText, index)
            }
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

            if (files.length) {
                id
                    ? await this.$store.dispatch(`${module}/uploadImages`, { files, id, type })
                    : await this.$store.dispatch('images/store', files);
            }

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
        async addImages ({ id, data }) {
            await this.$store.dispatch('categories/addSelectedImages',{ id, data })
            await this.$router.push({ name: 'cms.catalog.categories.images', params: { id } });

            return swal.fire({
                title: 'Изображения добавлены!',
                text: '',
                timer: 2000,
                showConfirmButton: false,
                icon: 'success'
            });
        }
    }
}

export const subCategoryImageAddMethod = {
    methods: {
        async addImages ({ type, id, data, redirectRoute }) {
            await this.$store.dispatch('subCategories/addSelectedImages', { type, id, data })
            await this.$router.push(redirectRoute);

            return swal.fire({
                title: 'Изображения добавлены!',
                text: '',
                timer: 2000,
                showConfirmButton: false,
                icon: 'success'
            });
        }
    }
}
