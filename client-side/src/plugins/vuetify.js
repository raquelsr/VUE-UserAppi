import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import {
  VBtn,
  VCard,
  VDatePicker,
  VDialog,
  VExpansionPanels,
  VExpansionPanel,
  VExpansionPanelHeader,
  VExpansionPanelContent,
  VIcon,
  VSpacer,
} from 'vuetify';

Vue.use(Vuetify, {
  components: {
    VBtn,
    VCard,
    VDatePicker,
    VDialog,
    VExpansionPanels,
    VExpansionPanel,
    VExpansionPanelHeader,
    VExpansionPanelContent,
    VIcon,
    VSpacer,
  },
});

export default new Vuetify({
});
