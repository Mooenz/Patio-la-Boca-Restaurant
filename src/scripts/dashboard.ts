// Configuración de imagen
const IMAGE_CONFIG = {
	maxWidth: 1000,
	maxHeight: 1000,
	maxSize: 500 * 1024, // 500KB
	allowedTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
};

// ========== TOAST NOTIFICATIONS ==========

const toastContainer = document.getElementById('toast-container');

/**
 * Escapa HTML para prevenir XSS
 */
function escapeHtml(text: string): string {
	const div = document.createElement('div');
	div.textContent = text;
	return div.innerHTML;
}

/**
 * Muestra un mensaje temporal (toast) al usuario
 */
function showToast(message: string, duration: number = 8000) {
	if (!toastContainer) return;

	const toast = document.createElement('div');
	toast.className = 'toast-enter pointer-events-auto bg-background-secondary border border-accent/30 text-text px-5 py-4 rounded-lg shadow-lg max-w-sm mb-3';

	// Crear elementos de forma segura (sin innerHTML con datos dinámicos)
	const wrapper = document.createElement('div');
	wrapper.className = 'flex items-start gap-3';

	const svgNS = 'http://www.w3.org/2000/svg';
	const svg = document.createElementNS(svgNS, 'svg');
	svg.setAttribute('class', 'w-5 h-5 text-accent shrink-0 mt-0.5');
	svg.setAttribute('fill', 'none');
	svg.setAttribute('stroke', 'currentColor');
	svg.setAttribute('viewBox', '0 0 24 24');
	const path = document.createElementNS(svgNS, 'path');
	path.setAttribute('stroke-linecap', 'round');
	path.setAttribute('stroke-linejoin', 'round');
	path.setAttribute('stroke-width', '2');
	path.setAttribute('d', 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z');
	svg.appendChild(path);

	const textDiv = document.createElement('div');
	const title = document.createElement('p');
	title.className = 'font-medium';
	title.textContent = '¡Cambios guardados!';
	const messageP = document.createElement('p');
	messageP.className = 'text-sm text-text-secondary mt-1';
	messageP.textContent = message; // Seguro: textContent escapa automáticamente

	textDiv.appendChild(title);
	textDiv.appendChild(messageP);
	wrapper.appendChild(svg);
	wrapper.appendChild(textDiv);
	toast.appendChild(wrapper);

	toastContainer.appendChild(toast);

	// Remover el toast después del tiempo especificado
	setTimeout(() => {
		toast.classList.remove('toast-enter');
		toast.classList.add('toast-exit');
		setTimeout(() => {
			toast.remove();
		}, 300);
	}, duration);
}

const CACHE_UPDATE_MESSAGE = 'Los cambios se verán reflejados en la carta en aproximadamente 2-3 minutos.';

// ========== BUSCADOR ==========

const searchMenusInput = document.getElementById('search-menus') as HTMLInputElement;
const searchItemsInput = document.getElementById('search-items') as HTMLInputElement;
const filterSectionSelect = document.getElementById('filter-items-section') as HTMLSelectElement;
const menusList = document.getElementById('menus-list');
const itemsList = document.getElementById('items-list');
const menusCount = document.getElementById('menus-count');
const itemsCount = document.getElementById('items-count');

/**
 * Filtra elementos basándose en el texto de búsqueda (para menús)
 */
function filterMenus(searchText: string) {
	if (!menusList) return;

	const items = menusList.querySelectorAll('.menu-item');
	const searchLower = searchText.toLowerCase().trim();
	let visibleCount = 0;

	items.forEach((item) => {
		const searchData = (item as HTMLElement).dataset.searchText || '';
		const matches = searchLower === '' || searchData.includes(searchLower);

		if (matches) {
			(item as HTMLElement).style.display = '';
			visibleCount++;
		} else {
			(item as HTMLElement).style.display = 'none';
		}
	});

	// Actualizar contador
	if (menusCount) {
		if (searchLower === '') {
			menusCount.textContent = '';
		} else {
			menusCount.textContent = `${visibleCount} de ${items.length} encontrados`;
		}
	}
}

/**
 * Filtra platos basándose en texto de búsqueda Y sección seleccionada
 */
function filterItems() {
	if (!itemsList) return;

	const items = itemsList.querySelectorAll('.item-entry');
	const searchText = searchItemsInput?.value.toLowerCase().trim() || '';
	const selectedSection = filterSectionSelect?.value || '';
	let visibleCount = 0;

	items.forEach((item) => {
		const el = item as HTMLElement;
		const searchData = el.dataset.searchText || '';
		const sectionId = el.dataset.sectionId || '';

		// Verificar coincidencia de texto
		const matchesText = searchText === '' || searchData.includes(searchText);
		// Verificar coincidencia de sección
		const matchesSection = selectedSection === '' || sectionId === selectedSection;

		if (matchesText && matchesSection) {
			el.style.display = '';
			visibleCount++;
		} else {
			el.style.display = 'none';
		}
	});

	// Actualizar contador
	if (itemsCount) {
		const hasFilter = searchText !== '' || selectedSection !== '';
		if (!hasFilter) {
			itemsCount.textContent = '';
		} else {
			itemsCount.textContent = `${visibleCount} de ${items.length} encontrados`;
		}
	}
}

// Buscador de menús
if (searchMenusInput) {
	searchMenusInput.addEventListener('input', (e) => {
		const searchText = (e.target as HTMLInputElement).value;
		filterMenus(searchText);
	});
}

// Buscador de platos (texto)
if (searchItemsInput) {
	searchItemsInput.addEventListener('input', () => {
		filterItems();
	});
}

// Filtro de platos por sección
if (filterSectionSelect) {
	filterSectionSelect.addEventListener('change', () => {
		filterItems();
	});
}

// Tab switching
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const tabName = button.getAttribute('data-tab');

		tabButtons.forEach((btn) => {
			btn.classList.remove('border-accent', 'text-text');
			btn.classList.add('border-transparent', 'text-text-secondary');
		});
		button.classList.add('border-accent', 'text-text');
		button.classList.remove('border-transparent', 'text-text-secondary');

		tabContents.forEach((content) => {
			content.classList.add('hidden');
		});
		document.getElementById(`${tabName}-tab`)?.classList.remove('hidden');
	});
});

if (tabButtons.length > 0) {
	(tabButtons[0] as HTMLElement).click();
}

// Helper para actualizar label del toggle
function updateActiveLabel(checkbox: HTMLInputElement) {
	const label = checkbox.closest('label')?.parentElement?.querySelector('.active-label');
	if (label) {
		label.textContent = checkbox.checked ? 'Activo' : 'Inactivo';
	}
}

// ========== FUNCIONES DE LOADING STATE ==========

/**
 * Muestra el estado de carga en un botón
 */
function setButtonLoading(button: HTMLButtonElement, loading: boolean, text?: string) {
	const spinner = button.querySelector('.spinner');
	const btnText = button.querySelector('.btn-text');
	const cancelBtn = button.parentElement?.querySelector('button[type="button"]') as HTMLButtonElement;

	if (loading) {
		button.disabled = true;
		spinner?.classList.remove('hidden');
		if (btnText && text) btnText.textContent = text;
		if (cancelBtn) cancelBtn.disabled = true;
	} else {
		button.disabled = false;
		spinner?.classList.add('hidden');
		if (btnText) btnText.textContent = 'Guardar';
		if (cancelBtn) cancelBtn.disabled = false;
	}
}

/**
 * Deshabilita todos los botones de edición durante una operación
 */
function setEditButtonsDisabled(disabled: boolean) {
	document.querySelectorAll('[data-action="edit"]').forEach((btn) => {
		(btn as HTMLButtonElement).disabled = disabled;
		if (disabled) {
			btn.classList.add('opacity-50', 'cursor-not-allowed');
		} else {
			btn.classList.remove('opacity-50', 'cursor-not-allowed');
		}
	});
}

// ========== VALIDACIÓN Y SUBIDA DE IMÁGENES ==========

/**
 * Valida una imagen antes de subirla
 */
async function validateImage(file: File): Promise<{ valid: boolean; error?: string }> {
	// Validar tipo
	if (!IMAGE_CONFIG.allowedTypes.includes(file.type)) {
		return { valid: false, error: 'Tipo de archivo no permitido. Use JPG, PNG, WebP o GIF.' };
	}

	// Validar tamaño
	if (file.size > IMAGE_CONFIG.maxSize) {
		return { valid: false, error: `El archivo es muy grande. Máximo: ${IMAGE_CONFIG.maxSize / 1024}KB` };
	}

	// Validar dimensiones
	return new Promise((resolve) => {
		const img = new Image();
		img.onload = () => {
			URL.revokeObjectURL(img.src);
			if (img.width > IMAGE_CONFIG.maxWidth || img.height > IMAGE_CONFIG.maxHeight) {
				resolve({
					valid: false,
					error: `La imagen es muy grande (${img.width}×${img.height}). Máximo: ${IMAGE_CONFIG.maxWidth}×${IMAGE_CONFIG.maxHeight}px`,
				});
			} else {
				resolve({ valid: true });
			}
		};
		img.onerror = () => {
			URL.revokeObjectURL(img.src);
			resolve({ valid: false, error: 'No se pudo leer la imagen. Archivo corrupto o inválido.' });
		};
		img.src = URL.createObjectURL(file);
	});
}

/**
 * Sube una imagen al servidor
 */
async function uploadImage(file: File, menuId: string, menuSlug: string): Promise<{ success: boolean; path?: string; error?: string }> {
	const formData = new FormData();
	formData.append('image', file);
	formData.append('menuId', menuId);
	formData.append('menuSlug', menuSlug);

	try {
		const response = await fetch('/api/upload', {
			method: 'POST',
			body: formData,
		});

		const result = await response.json();

		if (response.ok) {
			return { success: true, path: result.path };
		} else {
			return { success: false, error: result.error || 'Error al subir la imagen' };
		}
	} catch (error: any) {
		return { success: false, error: error.message || 'Error de conexión' };
	}
}

// ========== MENU MODAL ==========

const menuModal = document.getElementById('menu-modal');
const menuModalTitle = document.getElementById('menu-modal-title');
const createMenuBtn = document.getElementById('create-menu-btn');
const closeMenuModal = document.getElementById('close-menu-modal');
const menuForm = document.getElementById('menu-form') as HTMLFormElement;
const menuImageInput = document.getElementById('menu-image-input') as HTMLInputElement;
const menuImagePreview = document.getElementById('menu-image-preview');
const menuImagePreviewImg = document.getElementById('menu-image-preview-img') as HTMLImageElement;
const menuImageRemove = document.getElementById('menu-image-remove');
const menuImageError = document.getElementById('menu-image-error');
let isEditingMenu = false;
let pendingMenuImage: File | null = null;

/**
 * Genera un slug a partir de un texto (minúsculas, sin espacios, sin acentos)
 */
function generateSlug(text: string): string {
	return text
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '') // Remover acentos
		.replace(/[^a-z0-9]+/g, '-') // Reemplazar caracteres especiales y espacios por guiones
		.replace(/^-+|-+$/g, ''); // Remover guiones al inicio y final
}

// Generar slug automáticamente desde el título en español
const menuTitleEsInput = menuForm?.querySelector('input[name="title_es"]') as HTMLInputElement;
const menuSlugInput = menuForm?.querySelector('input[name="slug"]') as HTMLInputElement;

if (menuTitleEsInput && menuSlugInput) {
	menuTitleEsInput.addEventListener('input', () => {
		// Solo generar slug automáticamente si estamos creando (no editando)
		if (!isEditingMenu) {
			menuSlugInput.value = generateSlug(menuTitleEsInput.value);
		}
	});
}

// Toggle label update para menú
const menuActiveCheckbox = menuForm?.querySelector('input[name="active"]') as HTMLInputElement;
if (menuActiveCheckbox) {
	menuActiveCheckbox.addEventListener('change', () => updateActiveLabel(menuActiveCheckbox));
}

// Mostrar/ocultar preview de imagen
function showMenuImagePreview(src: string) {
	if (menuImagePreview && menuImagePreviewImg) {
		menuImagePreviewImg.src = src;
		menuImagePreview.classList.remove('hidden');
	}
}

function hideMenuImagePreview() {
	if (menuImagePreview) {
		menuImagePreview.classList.add('hidden');
	}
	if (menuImagePreviewImg) {
		menuImagePreviewImg.src = '';
	}
}

function showMenuImageError(message: string) {
	if (menuImageError) {
		menuImageError.textContent = message;
		menuImageError.classList.remove('hidden');
	}
}

function hideMenuImageError() {
	if (menuImageError) {
		menuImageError.classList.add('hidden');
	}
}

// Manejar selección de imagen
if (menuImageInput) {
	menuImageInput.addEventListener('change', async (e) => {
		const file = (e.target as HTMLInputElement).files?.[0];
		hideMenuImageError();

		if (!file) {
			pendingMenuImage = null;
			return;
		}

		// Validar imagen
		const validation = await validateImage(file);
		if (!validation.valid) {
			showMenuImageError(validation.error!);
			menuImageInput.value = '';
			pendingMenuImage = null;
			return;
		}

		// Mostrar preview
		pendingMenuImage = file;
		showMenuImagePreview(URL.createObjectURL(file));
	});
}

// Remover imagen seleccionada
if (menuImageRemove) {
	menuImageRemove.addEventListener('click', () => {
		pendingMenuImage = null;
		if (menuImageInput) menuImageInput.value = '';
		hideMenuImagePreview();
		hideMenuImageError();
		// Limpiar el campo hidden de imagen si estamos creando
		if (!isEditingMenu) {
			(menuForm.querySelector('input[name="image"]') as HTMLInputElement).value = '';
		}
	});
}

// Abrir modal para crear
if (createMenuBtn && menuModal) {
	createMenuBtn.addEventListener('click', () => {
		isEditingMenu = false;
		pendingMenuImage = null;
		if (menuModalTitle) menuModalTitle.textContent = 'Crear Menú';
		menuForm.reset();
		(menuForm.querySelector('input[name="id"]') as HTMLInputElement).value = '';
		(menuForm.querySelector('input[name="image"]') as HTMLInputElement).value = '';
		(menuForm.querySelector('input[name="active"]') as HTMLInputElement).checked = true;
		updateActiveLabel(menuActiveCheckbox);
		hideMenuImagePreview();
		hideMenuImageError();
		menuModal.classList.remove('hidden');
	});
}

// Editar menú
document.querySelectorAll('[data-action="edit"][data-type="menu"]').forEach((button) => {
	button.addEventListener('click', () => {
		isEditingMenu = true;
		pendingMenuImage = null;
		if (menuModalTitle) menuModalTitle.textContent = 'Editar Menú';

		const id = button.getAttribute('data-id') || '';
		const slug = button.getAttribute('data-slug') || '';
		const titleEs = button.getAttribute('data-title-es') || '';
		const titleEn = button.getAttribute('data-title-en') || '';
		const image = button.getAttribute('data-image') || '';
		const active = button.getAttribute('data-active') === 'true';
		const displayOrder = button.getAttribute('data-display-order') || '0';

		(menuForm.querySelector('input[name="id"]') as HTMLInputElement).value = id;
		(menuForm.querySelector('input[name="slug"]') as HTMLInputElement).value = slug;
		(menuForm.querySelector('input[name="title_es"]') as HTMLInputElement).value = titleEs;
		(menuForm.querySelector('input[name="title_en"]') as HTMLInputElement).value = titleEn;
		(menuForm.querySelector('input[name="image"]') as HTMLInputElement).value = image;
		(menuForm.querySelector('input[name="active"]') as HTMLInputElement).checked = active;
		(menuForm.querySelector('input[name="display_order"]') as HTMLInputElement).value = displayOrder;
		updateActiveLabel(menuActiveCheckbox);

		// Mostrar imagen actual si existe
		hideMenuImageError();
		if (image) {
			showMenuImagePreview(image);
		} else {
			hideMenuImagePreview();
		}

		if (menuImageInput) menuImageInput.value = '';
		menuModal?.classList.remove('hidden');
	});
});

if (closeMenuModal && menuModal) {
	closeMenuModal.addEventListener('click', () => {
		menuModal.classList.add('hidden');
		menuForm.reset();
		pendingMenuImage = null;
		hideMenuImagePreview();
		hideMenuImageError();
	});
}

if (menuForm) {
	menuForm.addEventListener('submit', async (e) => {
		e.preventDefault();
		const formData = new FormData(menuForm);
		const id = formData.get('id') as string;
		const slug = formData.get('slug') as string;
		const isActive = (menuForm.querySelector('input[name="active"]') as HTMLInputElement).checked;
		let imagePath = formData.get('image') as string;

		const submitBtn = menuForm.querySelector('button[type="submit"]') as HTMLButtonElement;
		setButtonLoading(submitBtn, true, 'Guardando...');

		try {
			// Si hay una imagen pendiente, subirla primero
			if (pendingMenuImage) {
				setButtonLoading(submitBtn, true, 'Subiendo imagen...');
				const menuId = id || `new-${Date.now()}`;
				const uploadResult = await uploadImage(pendingMenuImage, menuId, slug);

				if (!uploadResult.success) {
					showMenuImageError(uploadResult.error!);
					setButtonLoading(submitBtn, false);
					return;
				}
				imagePath = uploadResult.path!;
			}

			// Validar que hay imagen
			if (!imagePath && !isEditingMenu) {
				showMenuImageError('Debes seleccionar una imagen para el menú');
				setButtonLoading(submitBtn, false);
				return;
			}

			const payload = {
				slug,
				title_es: formData.get('title_es'),
				title_en: formData.get('title_en'),
				image: imagePath,
				active: isActive,
				display_order: parseInt(formData.get('display_order') as string) || 0,
			};

			setButtonLoading(submitBtn, true, 'Guardando...');
			const url = isEditingMenu ? `/api/menus/${id}` : '/api/menus';
			const method = isEditingMenu ? 'PUT' : 'POST';

			const response = await fetch(url, {
				method,
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});

			if (response.ok) {
				menuModal?.classList.add('hidden');
				menuForm.reset();
				pendingMenuImage = null;
				showToast(CACHE_UPDATE_MESSAGE);
				setTimeout(() => location.reload(), 3000);
			} else {
				const error = await response.json();
				alert(`Error: ${error.error || 'Error al guardar el menú'}`);
			}
		} catch (error: any) {
			alert(`Error: ${error.message}`);
		} finally {
			setButtonLoading(submitBtn, false);
		}
	});
}

// ========== ITEM MODAL ==========

const itemModal = document.getElementById('item-modal');
const itemModalTitle = document.getElementById('item-modal-title');
const createItemBtn = document.getElementById('create-item-btn');
const closeItemModal = document.getElementById('close-item-modal');
const itemForm = document.getElementById('item-form') as HTMLFormElement;
let isEditingItem = false;

// Toggle label update para item
const itemActiveCheckbox = itemForm?.querySelector('input[name="active"]') as HTMLInputElement;
if (itemActiveCheckbox) {
	itemActiveCheckbox.addEventListener('change', () => updateActiveLabel(itemActiveCheckbox));
}

if (createItemBtn && itemModal) {
	createItemBtn.addEventListener('click', () => {
		isEditingItem = false;
		if (itemModalTitle) itemModalTitle.textContent = 'Crear Plato';
		itemForm.reset();
		(itemForm.querySelector('input[name="id"]') as HTMLInputElement).value = '';
		(itemForm.querySelector('input[name="active"]') as HTMLInputElement).checked = true;
		updateActiveLabel(itemActiveCheckbox);
		itemModal.classList.remove('hidden');
	});
}

// Editar item
document.querySelectorAll('[data-action="edit"][data-type="item"]').forEach((button) => {
	button.addEventListener('click', () => {
		isEditingItem = true;
		if (itemModalTitle) itemModalTitle.textContent = 'Editar Plato';

		const id = button.getAttribute('data-id') || '';
		const sectionId = button.getAttribute('data-section-id') || '';
		const titleEs = button.getAttribute('data-title-es') || '';
		const titleEn = button.getAttribute('data-title-en') || '';
		const descriptionEs = button.getAttribute('data-description-es') || '';
		const descriptionEn = button.getAttribute('data-description-en') || '';
		const price = button.getAttribute('data-price') || '';
		const category = button.getAttribute('data-category') || '';
		const active = button.getAttribute('data-active') === 'true';
		const displayOrder = button.getAttribute('data-display-order') || '0';

		(itemForm.querySelector('input[name="id"]') as HTMLInputElement).value = id;
		(itemForm.querySelector('select[name="menu_section_id"]') as HTMLSelectElement).value = sectionId;
		(itemForm.querySelector('input[name="title_es"]') as HTMLInputElement).value = titleEs;
		(itemForm.querySelector('input[name="title_en"]') as HTMLInputElement).value = titleEn;
		(itemForm.querySelector('textarea[name="description_es"]') as HTMLTextAreaElement).value = descriptionEs;
		(itemForm.querySelector('textarea[name="description_en"]') as HTMLTextAreaElement).value = descriptionEn;
		(itemForm.querySelector('input[name="price"]') as HTMLInputElement).value = price;
		(itemForm.querySelector('input[name="category"]') as HTMLInputElement).value = category;
		(itemForm.querySelector('input[name="active"]') as HTMLInputElement).checked = active;
		(itemForm.querySelector('input[name="display_order"]') as HTMLInputElement).value = displayOrder;
		updateActiveLabel(itemActiveCheckbox);

		itemModal?.classList.remove('hidden');
	});
});

if (closeItemModal && itemModal) {
	closeItemModal.addEventListener('click', () => {
		itemModal.classList.add('hidden');
		itemForm.reset();
	});
}

if (itemForm) {
	itemForm.addEventListener('submit', async (e) => {
		e.preventDefault();
		const formData = new FormData(itemForm);
		const id = formData.get('id') as string;
		const isActive = (itemForm.querySelector('input[name="active"]') as HTMLInputElement).checked;

		const submitBtn = itemForm.querySelector('button[type="submit"]') as HTMLButtonElement;
		setButtonLoading(submitBtn, true, 'Guardando...');

		try {
			const payload = {
				menu_section_id: formData.get('menu_section_id'),
				title_es: formData.get('title_es'),
				title_en: formData.get('title_en'),
				description_es: formData.get('description_es') || null,
				description_en: formData.get('description_en') || null,
				price: formData.get('price'),
				category: formData.get('category') || null,
				active: isActive,
				display_order: parseInt(formData.get('display_order') as string) || 0,
			};

			const url = isEditingItem ? `/api/items/${id}` : '/api/items';
			const method = isEditingItem ? 'PUT' : 'POST';

			const response = await fetch(url, {
				method,
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});

			if (response.ok) {
				itemModal?.classList.add('hidden');
				itemForm.reset();
				showToast(CACHE_UPDATE_MESSAGE);
				setTimeout(() => location.reload(), 3000);
			} else {
				const error = await response.json();
				alert(`Error: ${error.error || 'Error al guardar el plato'}`);
			}
		} catch (error: any) {
			alert(`Error: ${error.message}`);
		} finally {
			setButtonLoading(submitBtn, false);
		}
	});
}

// Close modals on outside click
if (menuModal) {
	menuModal.addEventListener('click', (e) => {
		if (e.target === menuModal) {
			menuModal.classList.add('hidden');
			menuForm?.reset();
		}
	});
}

if (itemModal) {
	itemModal.addEventListener('click', (e) => {
		if (e.target === itemModal) {
			itemModal.classList.add('hidden');
			itemForm?.reset();
		}
	});
}

// ========== DELETE MODAL ==========

const deleteModal = document.getElementById('delete-modal');
const deleteModalTitle = document.getElementById('delete-modal-title');
const deleteModalMessage = document.getElementById('delete-modal-message');
const deleteModalWarning = document.getElementById('delete-modal-warning');
const deleteModalId = document.getElementById('delete-modal-id') as HTMLInputElement;
const deleteModalType = document.getElementById('delete-modal-type') as HTMLInputElement;
const confirmDeleteBtn = document.getElementById('confirm-delete-btn') as HTMLButtonElement;
const cancelDeleteBtn = document.getElementById('cancel-delete-btn');

/**
 * Muestra el modal de confirmación de eliminación
 */
function showDeleteModal(id: string, type: string, name: string, itemsCount?: number) {
	if (!deleteModal || !deleteModalTitle || !deleteModalMessage || !deleteModalId || !deleteModalType) return;

	deleteModalId.value = id;
	deleteModalType.value = type;

	if (type === 'menu') {
		deleteModalTitle.textContent = 'Eliminar Menú';
		deleteModalMessage.textContent = `¿Estás seguro de que deseas eliminar el menú "${name}"?`;

		// Mostrar advertencia si tiene platos
		if (itemsCount && itemsCount > 0 && deleteModalWarning) {
			deleteModalWarning.textContent = `⚠️ Este menú tiene ${itemsCount} plato(s) asociado(s). Al eliminarlo, estos platos quedarán sin sección asignada.`;
			deleteModalWarning.classList.remove('hidden');
		} else if (deleteModalWarning) {
			deleteModalWarning.classList.add('hidden');
		}
	} else {
		deleteModalTitle.textContent = 'Eliminar Plato';
		deleteModalMessage.textContent = `¿Estás seguro de que deseas eliminar el plato "${name}"?`;
		if (deleteModalWarning) {
			deleteModalWarning.classList.add('hidden');
		}
	}

	deleteModal.classList.remove('hidden');
}

/**
 * Oculta el modal de eliminación
 */
function hideDeleteModal() {
	if (deleteModal) {
		deleteModal.classList.add('hidden');
	}
	if (deleteModalId) deleteModalId.value = '';
	if (deleteModalType) deleteModalType.value = '';
}

/**
 * Muestra el estado de carga en el botón de eliminar
 */
function setDeleteButtonLoading(loading: boolean) {
	if (!confirmDeleteBtn) return;

	const spinner = confirmDeleteBtn.querySelector('.spinner');
	const btnText = confirmDeleteBtn.querySelector('.btn-text');

	if (loading) {
		confirmDeleteBtn.disabled = true;
		spinner?.classList.remove('hidden');
		if (btnText) btnText.textContent = 'Eliminando...';
		if (cancelDeleteBtn) (cancelDeleteBtn as HTMLButtonElement).disabled = true;
	} else {
		confirmDeleteBtn.disabled = false;
		spinner?.classList.add('hidden');
		if (btnText) btnText.textContent = 'Eliminar';
		if (cancelDeleteBtn) (cancelDeleteBtn as HTMLButtonElement).disabled = false;
	}
}

// Manejar click en botones de eliminar
document.querySelectorAll('[data-action="delete"]').forEach((button) => {
	button.addEventListener('click', () => {
		const id = button.getAttribute('data-id') || '';
		const type = button.getAttribute('data-type') || '';
		const name = button.getAttribute('data-name') || '';
		const itemsCount = parseInt(button.getAttribute('data-items-count') || '0');

		showDeleteModal(id, type, name, itemsCount);
	});
});

// Cancelar eliminación
if (cancelDeleteBtn) {
	cancelDeleteBtn.addEventListener('click', hideDeleteModal);
}

// Cerrar modal al hacer click fuera
if (deleteModal) {
	deleteModal.addEventListener('click', (e) => {
		if (e.target === deleteModal) {
			hideDeleteModal();
		}
	});
}

// Confirmar eliminación
if (confirmDeleteBtn) {
	confirmDeleteBtn.addEventListener('click', async () => {
		const id = deleteModalId?.value;
		const type = deleteModalType?.value;

		if (!id || !type) return;

		setDeleteButtonLoading(true);

		try {
			const endpoint = type === 'menu' ? `/api/menus/${id}` : `/api/items/${id}`;

			const response = await fetch(endpoint, {
				method: 'DELETE',
			});

			if (response.ok) {
				hideDeleteModal();
				showToast(CACHE_UPDATE_MESSAGE);
				setTimeout(() => location.reload(), 3000);
			} else {
				const error = await response.json();
				alert(`Error: ${error.error || 'Error al eliminar'}`);
			}
		} catch (error: any) {
			alert(`Error: ${error.message}`);
		} finally {
			setDeleteButtonLoading(false);
		}
	});
}
