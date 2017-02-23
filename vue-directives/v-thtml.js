import Vue from 'vue'
import $ from 'jquery'

const config = {
  inserted (el, bindings) {
    const template = $(bindings.value)
    let filters = el.attributes.filters || null
    filters = filters ? filters.value.split('|')
      .map(filter => filter.trim()) : []
    //
    if (filters.length) applyFilters()
    //
    function applyFilters () {
      filters.forEach(filter => {
        if (filter === 'capitalize') {
          template.css('text-transform', 'uppercase')
        }
        if (filter === 'pinkify') {
          template.css('color', 'deeppink')
        }
      })
    }
    template.appendTo(el)
  }
}

Vue.directive('thtml', config)

