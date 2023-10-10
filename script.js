const nameField = document.getElementById('name')

const saveButton = document.getElementById('save')
const resetButton = document.getElementById('cancel')

const save = function () {
    const content = nameField.value
    localStorage.setItem('name', content)
    alert('blocco note salvato')
}

const cancel = function () {
    if (window.confirm('Vuoi cancellare tutto?')) {
        localStorage.removeItem('name')
        nameField.value = ''
    }
}

saveButton.addEventListener('click', save)
resetButton.addEventListener('click', cancel)