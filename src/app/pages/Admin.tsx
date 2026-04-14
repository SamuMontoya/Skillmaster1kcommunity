import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { useSkills } from '../context/SkillContext';
import { Skill } from '../types/skill';
import { Edit2, Trash2, Plus } from 'lucide-react';
import { toast } from 'sonner';

export function Admin() {
  const { skills, addSkill, updateSkill, deleteSkill } = useSkills();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    fullDescription: '',
    imageUrl: '',
    category: '',
    objectives: '',
    careerPaths: ''
  });

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      fullDescription: '',
      imageUrl: '',
      category: '',
      objectives: '',
      careerPaths: ''
    });
    setEditingSkill(null);
  };

  const handleOpenDialog = (skill?: Skill) => {
    if (skill) {
      setEditingSkill(skill);
      setFormData({
        name: skill.name,
        description: skill.description,
        fullDescription: skill.fullDescription,
        imageUrl: skill.imageUrl,
        category: skill.category,
        objectives: skill.objectives.join('\n'),
        careerPaths: skill.careerPaths.join('\n')
      });
    } else {
      resetForm();
    }
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const skillData = {
      name: formData.name,
      description: formData.description,
      fullDescription: formData.fullDescription,
      imageUrl: formData.imageUrl,
      category: formData.category,
      objectives: formData.objectives.split('\n').filter(o => o.trim()),
      careerPaths: formData.careerPaths.split('\n').filter(p => p.trim())
    };

    if (editingSkill) {
      updateSkill(editingSkill.id, skillData);
      toast.success('Habilidad actualizada exitosamente');
    } else {
      addSkill(skillData);
      toast.success('Habilidad creada exitosamente');
    }

    setIsDialogOpen(false);
    resetForm();
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`¿Estás seguro de eliminar "${name}"?`)) {
      deleteSkill(id);
      toast.success('Habilidad eliminada');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Administración de Habilidades</h1>
            <p className="text-muted-foreground">
              Gestiona el catálogo de habilidades disponibles
            </p>
          </div>

          {/* FAB - Add Button */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => handleOpenDialog()}
              >
                <Plus className="mr-2 h-5 w-5" />
                Nueva Habilidad
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingSkill ? 'Editar Habilidad' : 'Nueva Habilidad'}
                </DialogTitle>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nombre *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej: Programación Full-Stack"
                  />
                </div>

                <div>
                  <Label htmlFor="category">Categoría *</Label>
                  <Input
                    id="category"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="Ej: Tecnología"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Descripción Corta *</Label>
                  <Textarea
                    id="description"
                    required
                    rows={2}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Descripción breve para la tarjeta"
                  />
                </div>

                <div>
                  <Label htmlFor="fullDescription">Descripción Completa *</Label>
                  <Textarea
                    id="fullDescription"
                    required
                    rows={3}
                    value={formData.fullDescription}
                    onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                    placeholder="Descripción detallada"
                  />
                </div>

                <div>
                  <Label htmlFor="imageUrl">URL de Imagen *</Label>
                  <Input
                    id="imageUrl"
                    required
                    type="url"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>

                <div>
                  <Label htmlFor="objectives">Objetivos (uno por línea) *</Label>
                  <Textarea
                    id="objectives"
                    required
                    rows={4}
                    value={formData.objectives}
                    onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                    placeholder="Objetivo 1&#10;Objetivo 2&#10;Objetivo 3"
                  />
                </div>

                <div>
                  <Label htmlFor="careerPaths">Caminos Profesionales (uno por línea) *</Label>
                  <Textarea
                    id="careerPaths"
                    required
                    rows={3}
                    value={formData.careerPaths}
                    onChange={(e) => setFormData({ ...formData, careerPaths: e.target.value })}
                    placeholder="Camino 1&#10;Camino 2&#10;Camino 3"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                    {editingSkill ? 'Actualizar' : 'Crear'} Habilidad
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setIsDialogOpen(false);
                      resetForm();
                    }}
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Skills Table */}
        <div className="space-y-4">
          {skills.map(skill => (
            <Card key={skill.id} className="overflow-hidden bg-card/50 backdrop-blur border-border/50">
              <div className="md:flex">
                {/* Thumbnail */}
                <div className="md:w-48 h-32 md:h-auto overflow-hidden flex-shrink-0">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">{skill.name}</h3>
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                          {skill.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {skill.description}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 ml-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleOpenDialog(skill)}
                        className="hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDelete(skill.id, skill.name)}
                        className="hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {skills.length === 0 && (
          <Card className="p-12 text-center bg-card/30">
            <p className="text-lg text-muted-foreground">
              No hay habilidades registradas. Crea la primera para comenzar.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
