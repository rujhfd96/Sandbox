import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ReportPage.css"; 

export default function EnrollmentPage() {
  const [sending, setSending] = useState(false);

  const [form, setForm] = useState({
    responsavelNome: "",
    responsavelEmail: "",
    responsavelTelefone: "",
    melhorHorarioContato: "Manhã",
    comoConheceu: "Indicação",
    alunoNome: "",
    alunoNascimento: "",
    seriePretendida: "Educação Infantil – Berçário",
    turno: "Manhã",
    bilinguismo: "Português + Inglês",
    necessidadesEspeciais: "Não",
    descricaoNecessidades: "",
    escolaAtual: "",
    mensagem: "",
    consentimento: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.consentimento) {
      alert("Por favor, aceite o consentimento para prosseguir.");
      return;
    }
    setSending(true);

    const message_html = `
      <div style="font-family: Arial, Helvetica, sans-serif; color:#1e293b;">
        <h2 style="margin:0 0 12px 0;color:#0a4fbf;">Pré-cadastro de Matrícula</h2>

        <table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:720px;border-collapse:collapse;background:#f5f5f5;border-radius:8px;overflow:hidden">
          <tbody>
            ${row("Nome do responsável", form.responsavelNome)}
            ${row("E-mail do responsável", form.responsavelEmail)}
            ${row("Telefone/WhatsApp", form.responsavelTelefone)}
            ${row("Melhor horário para contato", form.melhorHorarioContato)}
            ${row("Como conheceu a escola", form.comoConheceu)}
          </tbody>
        </table>

        <h3 style="margin:24px 0 8px 0;color:#0a4fbf;">Dados do aluno</h3>
        <table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:720px;border-collapse:collapse;background:#f5f5f5;border-radius:8px;overflow:hidden">
          <tbody>
            ${row("Nome do aluno", form.alunoNome)}
            ${row("Data de nascimento", form.alunoNascimento)}
            ${row("Série/Ano pretendido", form.seriePretendida)}
            ${row("Turno desejado", form.turno)}
            ${row("Programa bilíngue", form.bilinguismo)}
            ${row("Necessidades específicas", form.necessidadesEspeciais)}
            ${
              form.descricaoNecessidades?.trim()
                ? row("Descrição das necessidades", form.descricaoNecessidades)
                : ""
            }
            ${row("Escola atual", form.escolaAtual)}
          </tbody>
        </table>

        <h3 style="margin:24px 0 8px 0;color:#0a4fbf;">Mensagem</h3>
        <pre style="white-space:pre-wrap;background:#0b1b34;color:#e5e7eb;padding:14px;border-radius:8px;line-height:1.5;font-size:14px;">
${escapeHtml(form.mensagem || "—")}
        </pre>
      </div>
    `;

    try {
      await emailjs.send(
        "service_smvksti",   
        "template_3x2jexm",  
        {
          assunto: `Pré-cadastro de Matrícula — ${form.alunoNome || "Aluno(a)"}`,
          message_html,
          reply_to: form.responsavelEmail,
        },
        { publicKey: "9-jhRNgYsLBMmOAfv" } 
      );
      alert("Formulário enviado com sucesso! ✅ Em breve entraremos em contato.");
      setForm({
        responsavelNome: "",
        responsavelEmail: "",
        responsavelTelefone: "",
        melhorHorarioContato: "Manhã",
        comoConheceu: "Indicação",
        alunoNome: "",
        alunoNascimento: "",
        seriePretendida: "Educação Infantil – Berçário",
        turno: "Manhã",
        bilinguismo: "Português + Inglês",
        necessidadesEspeciais: "Não",
        descricaoNecessidades: "",
        escolaAtual: "",
        mensagem: "",
        consentimento: false,
      });
    } catch (err) {
      console.error(err);
      alert("Não foi possível enviar. Verifique as chaves/ids do EmailJS.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="report-page">
      <section className="report-card">
        <h1>Pré-cadastro de Matrícula</h1>
        <p className="muted">
          Preencha os dados abaixo. Entraremos em contato para concluir o processo de matrícula.
        </p>

        <form className="report-form" onSubmit={handleSubmit}>
          <div className="grid-2">
            <div className="field">
              <label>Nome do responsável *</label>
              <input
                type="text"
                name="responsavelNome"
                value={form.responsavelNome}
                onChange={handleChange}
                required
                placeholder="Ex.: Maria Silva"
              />
            </div>
            <div className="field">
              <label>E-mail do responsável *</label>
              <input
                type="email"
                name="responsavelEmail"
                value={form.responsavelEmail}
                onChange={handleChange}
                required
                placeholder="voce@exemplo.com"
              />
            </div>
          </div>

          <div className="grid-2">
            <div className="field">
              <label>Telefone/WhatsApp *</label>
              <input
                type="tel"
                name="responsavelTelefone"
                value={form.responsavelTelefone}
                onChange={handleChange}
                required
                placeholder="(85) 9 9999-9999"
              />
            </div>
            <div className="field">
              <label>Melhor horário para contato</label>
              <select
                name="melhorHorarioContato"
                value={form.melhorHorarioContato}
                onChange={handleChange}
              >
                <option>Manhã</option>
                <option>Tarde</option>
                <option>Noite</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label>Como conheceu a escola?</label>
            <select
              name="comoConheceu"
              value={form.comoConheceu}
              onChange={handleChange}
            >
              <option>Indicação</option>
              <option>Instagram</option>
              <option>Facebook</option>
              <option>Google</option>
              <option>Passando em frente</option>
              <option>Outro</option>
            </select>
          </div>

          <div className="grid-2">
            <div className="field">
              <label>Nome do aluno *</label>
              <input
                type="text"
                name="alunoNome"
                value={form.alunoNome}
                onChange={handleChange}
                required
                placeholder="Ex.: João Pedro"
              />
            </div>
            <div className="field">
              <label>Data de nascimento *</label>
              <input
                type="date"
                name="alunoNascimento"
                value={form.alunoNascimento}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid-3">
            <div className="field">
              <label>Série/Ano pretendido</label>
              <select
                name="seriePretendida"
                value={form.seriePretendida}
                onChange={handleChange}
              >
                <option>Educação Infantil – Berçário</option>
                <option>Educação Infantil – Infantil I</option>
                <option>Educação Infantil – Infantil II</option>
                <option>Fundamental Anos Iniciais (1º ao 5º)</option>
                <option>Fundamental Anos Finais (6º ao 7º)</option>
              </select>
            </div>

            <div className="field">
              <label>Turno desejado</label>
              <select name="turno" value={form.turno} onChange={handleChange}>
                <option>Manhã</option>
                <option>Tarde</option>
                <option>Integral</option>
              </select>
            </div>

            <div className="field">
              <label>Programa bilíngue</label>
              <select
                name="bilinguismo"
                value={form.bilinguismo}
                onChange={handleChange}
              >
                <option>Português + Inglês</option>
                <option>Português</option>
                <option>Inglês (tarde) + Português (manhã)</option>
              </select>
            </div>
          </div>

          {/* Este bloco era grid-3; como removemos o campo de intercâmbio, deixamos grid-2 */}
          <div className="grid-2">
            <div className="field">
              <label>Necessidades específicas</label>
              <select
                name="necessidadesEspeciais"
                value={form.necessidadesEspeciais}
                onChange={handleChange}
              >
                <option>Não</option>
                <option>Sim</option>
              </select>
            </div>

            <div className="field">
              <label>Escola atual (opcional)</label>
              <input
                type="text"
                name="escolaAtual"
                value={form.escolaAtual}
                onChange={handleChange}
                placeholder="Nome da escola atual"
              />
            </div>
          </div>

          {form.necessidadesEspeciais === "Sim" && (
            <div className="field">
              <label>Descreva as necessidades específicas</label>
              <textarea
                name="descricaoNecessidades"
                value={form.descricaoNecessidades}
                onChange={handleChange}
                rows={3}
                placeholder="Ex.: Acompanhamento terapêutico, laudos, adaptações necessárias..."
              />
            </div>
          )}

          <div className="field">
            <label>Mensagem (opcional)</label>
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              rows={4}
              placeholder="Conte algo que considere importante sobre o aluno ou sua expectativa."
            />
          </div>

          <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input
              type="checkbox"
              name="consentimento"
              checked={form.consentimento}
              onChange={handleChange}
            />
            <span style={{ fontSize: 14, color: "#475569" }}>
              Autorizo o contato da Sandbox e o tratamento dos dados conforme a LGPD.
            </span>
          </label>

          <div className="actions">
            <button type="submit" disabled={sending}>
              {sending ? "Enviando..." : "Enviar interesse de matrícula"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

function row(label, value) {
  return `
    <tr>
      <td style="padding:10px 14px;background:#e9eef7;color:#0a4fbf;font-weight:700;width:240px;">${escapeHtml(
        label
      )}</td>
      <td style="padding:10px 14px;background:#f8fafc;color:#334155;">${escapeHtml(
        value || "—"
      )}</td>
    </tr>
  `;
}
function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
