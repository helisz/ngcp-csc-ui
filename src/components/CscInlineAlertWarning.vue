<template>
    <csc-inline-alert
        icon="warning"
        color="warning"
        v-bind="$attrs"
    >
        <slot />
        <template
            #action
        >
            <slot
                name="action"
            />
        </template>
    </csc-inline-alert>
</template>

<script>
import CscInlineAlert from 'components/CscInlineAlert'
export default {
    name: 'CscInlineAlertWarning',
    components: {
        CscInlineAlert
    }
}
</script>
