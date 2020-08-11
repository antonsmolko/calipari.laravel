<template>
    <div>
        <v-select
            title="Фактуры"
            icon="texture"
            name="texture"
            :options="addedCostsItems"
            placeholder="Выберите позицию"
            :vField="$v.texture"
            :vRule="{ required: true, numeric: true }"
            :module="storeModule"
            nameField="display_name"
            indexName="key_name"
            action="setPersonalOrderField"/>
    </div>

</template>

<script>
import VSelect from "@/custom_components/VForm/VSelect";

export default {
    name: "OrderAddedCosts",
    components: {
        VSelect
    },
    data: () => ({
        addedCostsItems: [
            {
                display_name: 'Обработка изображения',
                key_name: 'image_processing',
                value: 1000
            },
            {
                display_name: 'Поиск изображения',
                key_name: 'image_search',
                value: 1000
            },
            {
                display_name: 'Покупка изображения',
                key_name: 'image_costs',
                value: ''
            }
        ],
        storeModule: 'orders'
    })
}
</script>
