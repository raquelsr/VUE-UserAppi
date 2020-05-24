import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import {
  VExpansionPanels,
  VExpansionPanel,
  VExpansionPanelHeader,
  VExpansionPanelContent,
  VBtn,
  VIcon,
  VDatePicker,
  VDialog,
  VCard,
  VSpacer,
} from 'vuetify';

Vue.use(Vuetify, {
  components: {
    VExpansionPanel,
    VExpansionPanels,
    VExpansionPanelHeader,
    VExpansionPanelContent,
    VBtn,
    VIcon,
    VDatePicker,
    VDialog,
    VCard,
    VSpacer,
  },

});

export default new Vuetify({
});
